import getDaysInMonth from "../utils/getDaysInMonth.js";
import getBreakdownDate from "../utils/getBreakdownDate.js";
import { createCalendarCell } from "../templates/templates.js";

export default function insertCalendarCells(year, month) {
	const calendarGrid = document.querySelector("#calendar-grid");

	const monthNumOfDays = getDaysInMonth(year, month);
	const currentDateObj = getBreakdownDate(new Date());
	const currentDate = new Date(currentDateObj.year, currentDateObj.month - 1, currentDateObj.day);

	for (let i = 1; i <= monthNumOfDays; i++) {
		const fragment = createCalendarCell();
		const cell = fragment.querySelector(".calendar__cell");

		const cellDate = new Date(year, month - 1, i);

		cell.dataset.day = i;
		cell.querySelector(".cell__day-number").textContent = i;

		if (cellDate < currentDate) {
			cell.querySelector("[data-action~='display-event-form']").remove();
			cell.classList.add("calendar__cell--outdated");
		} else {
			cell.querySelector("[data-action~='display-event-form']").dataset.day = i;
		}

		calendarGrid.appendChild(cell);
	}
}
