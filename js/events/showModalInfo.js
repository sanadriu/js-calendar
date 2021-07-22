import { createModalInfo } from "../templates/templates.js";
import getMonthName from "../helpers/getMonthName.js";

export default function showModalInfo(idEvent) {
  let events = JSON.parse(localStorage.getItem("calendarEvents"));
  const body = document.querySelector("body");
  let modal = createModalInfo();
  body.appendChild(modal);
  let type = document.querySelector(".modal__type");
  
  for (const e of events) {
    if (e.id === parseInt(idEvent)) {
      let p = document.createElement('p');
      p.textContent = e.id;
      p.style.display = "none";
      p.id = 'id-event';
      document.querySelector('#info-event').appendChild(p);

      document.querySelector("#date-event").textContent = `${getMonthName(e.initialDate.month)} ${e.initialDate.day} ${e.initialDate.year}`;
      document.querySelector("#title-event").textContent = e.title;
      document.querySelector("#description-event").textContent = e.description;
      switch (e.type) {
        case "Meeting":
          type.style.backgroundColor = "red";
          break;
        case "Task":
          type.style.backgroundColor = "green";
          break;
        case "Personal":
          type.style.backgroundColor = "orange";
          break;
        case "Study":
          type.style.backgroundColor = "blue";
          break;
        default:
          break;
      }
      console.log(e.title, e.initialDate, e.description, e.type);
    }
  }
}
