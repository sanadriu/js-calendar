import getMonthName from "../helpers/getMonthName.js";

export default function openEvents() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-action='display-event-list']"))
      asideEvents(e.target.dataset.day);
  });
}

export function asideEvents(day) {
  //Makes the aside visible and activates the flex
  let aside = document.querySelector(".container__dataEvent");
  aside.style.flexBasis = "15%";
  aside.style.display = "block";
  let grid = document.querySelector(".calendar__grid");
  grid.style.flexBasis = "85%";
  //Prints day, week and month on the top of the aside
  let date = document.querySelector("#date-event");
  let thisYear = document
    .querySelector(".calendar__month")
    .textContent.substring(0, 4);
  let thisMonth = document
    .querySelector(".calendar__month")
    .textContent.substring(
      5,
      document.querySelector(".calendar__month").textContent.length
    );
  date.textContent = `${thisMonth} ${day}, ${thisYear}`;
  //Gives a hint to create new events
  let hint = document.createElement("span");
  hint.textContent =
    "There are no events for this day. You can create a new one";
  hint.className = "aside__hint";
  aside.appendChild(hint);
}
