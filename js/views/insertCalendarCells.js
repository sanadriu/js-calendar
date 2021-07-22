import getDaysInMonth from "../helpers/getDaysInMonth.js";
import { createCalendarCell } from "../templates/templates.js";

export default function insertCalendarCells(yearNum, monthNum) {
	const calendarGrid = document.querySelector("#calendar-grid");

	const monthNumOfDays = getDaysInMonth(yearNum, monthNum);

	for (let i = 0; i < monthNumOfDays; i++) {
		const calendarCell = createCalendarCell();

		calendarCell.querySelector(".cell__day-number").textContent = i + 1;
		calendarCell.querySelector(".calendar__cell").dataset.day = i + 1;

		calendarGrid.appendChild(calendarCell);
	}
}
