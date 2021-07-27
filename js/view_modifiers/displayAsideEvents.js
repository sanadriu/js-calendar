import getMonthName from "../utils/getMonthName.js";

export default function displayAsideEvents(day) {
  //En vez de pasar sólo el dataset.day, le pasamos todo el e.target del addEventListener
  const asideEventsElement = document.querySelector("#calendar-aside-events");
  asideEventsElement.classList.remove("calendar__aside-events--hidden");
  const asideDateElement = asideEventsElement.querySelector(
    "#calendar-aside-date"
  );
  const asideHintElement = asideEventsElement.querySelector(
    "#calendar-aside-hint"
  );

  //Hay que eliminar los eventos de otros días antes de nada
  let oldEvents = document.querySelectorAll(".aside__event");
  for (let event of oldEvents) {
    event.remove();
  }
  //Eliminamos también la fecha anterior
  let cross = asideDateElement.querySelector(".event__icon-top");
  let date = asideDateElement.querySelector(".aside__span");
  if (cross) {
    cross.remove();
    date.remove();
  }

  const calendarYear = sessionStorage.calendarYear;
  const calendarMonthName = getMonthName(sessionStorage.calendarMonth);
  //Agregamos la nueva fecha y el icono de cerrar
  let spanDate = document.createElement("span");
  spanDate.textContent = `${calendarMonthName} ${day.dataset.day}, ${calendarYear}`;
  spanDate.className = "aside__span";
  let spanClose = document.createElement("img");
  spanClose.src = "./assets/img/close.svg";
  spanClose.className = "event__icon-top";
  spanClose.dataset.action = "close-aside";
  asideDateElement.appendChild(spanDate);
  asideDateElement.appendChild(spanClose);

  for (let element of day.children) {
    //Recorremos los hijos del day y comparamos las clases. Si el día tiene eventos, creamos un article en la barra lateral
    if (element.matches(".event-tag")) {
      let newInfo = document.createElement("article");
      let erase = document.createElement("img");
      let info = document.createElement("span");

      info.innerHTML = `${
        element.querySelector(".event-tag__hour").textContent
      } - ${element.querySelector(".event-tag__title").textContent}`;
      newInfo.className = "aside__event";
      erase.dataset.event = element.dataset.event;
      info.className = "aside__span";
      erase.src = "./assets/img/delete.svg";
      erase.className = "event__icon-top";
      erase.dataset.action = "remove-event";
      newInfo.appendChild(info);
      newInfo.appendChild(erase);
      asideEventsElement.appendChild(newInfo);

      switch (element.className) {
        case "event-tag bg-red":
          newInfo.style.backgroundColor = "red";
          break;
        case "event-tag bg-orange":
          newInfo.style.backgroundColor = "orange";
          break;
        case "event-tag bg-green":
          newInfo.style.backgroundColor = "green";
          break;
        case "event-tag bg-blue":
          newInfo.style.backgroundColor = "blue";
          break;
        default:
          break;
      }
    }
  }

  //?¿Podríamos integrar este if en el anterior para que, si el día tiene un hijo de clase ".event-tag", el aviso salga "no-display"?
  if (asideEventsElement.children.length < 3) {
    asideHintElement.classList.remove("no-display");
  } else {
    asideHintElement.classList.add("no-display");
  }
}
