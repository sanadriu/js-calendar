import getDaysInMonth from "../utils/getDaysInMonth.js";
import { createCalendarCell } from "../templates/templates.js";

export default function insertCalendarCells(year, month) {
	const calendarGrid = document.querySelector("#calendar-grid");

	const monthNumOfDays = getDaysInMonth(year, month);
	const currentDate = new Date();

	for (let i = 1; i <= monthNumOfDays; i++) {
		const fragment = createCalendarCell();
		const cell = fragment.querySelector(".calendar__cell");

		const cellDate = new Date(year, month - 1, i);

		cell.querySelector(".cell__day-number").textContent = i;
		cell.dataset.day = i;

		if (currentDate > cellDate) {
			cell.querySelector("[data-action='display-event-form']").remove();
			cell.classList.add("calendar__cell--outdated");
		}

		calendarGrid.appendChild(cell);
	}
}
