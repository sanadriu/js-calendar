import getFirstDayOfMonth from "../helpers/getFirstDayOfMonth.js";

export default function setOffsetCalendarCells(yearNum, monthNum) {
  const firstCalendarCell = document.querySelector(".calendar__cell--day");
  const firstDayOfMonth = getFirstDayOfMonth(yearNum, monthNum).getDay();

  console.log(firstDayOfMonth);

  if (firstDayOfMonth === 0) {
    firstCalendarCell.style.gridColumn = 7;
  } else {
    firstCalendarCell.style.gridColumn = firstDayOfMonth;
  }
}
