import getMonthName from "../helpers/getMonthName.js";

export default function openEvents() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-action='display-event-list']"))
      asideEvents(e.target.dataset.day);
  });
}

export function asideEvents(day) {
  let aside = document.querySelector(".container__dataEvent");
  aside.style.flexBasis = "15%";
  aside.style.display = "block";
  let grid = document.querySelector(".calendar__grid");
  grid.style.flexBasis = "85%";
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
}
