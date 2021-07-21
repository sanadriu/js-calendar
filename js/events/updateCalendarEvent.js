import mod from "../helpers/mod.js";
import updateCalendar from "../views/updateCalendar.js";

export default function updateCalendarEvent() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='update-calendar']")) {
			if (e.target.matches("[data-action~='add-month']")) {
				sessionStorage.calendarMonth++;

				if (sessionStorage.calendarMonth > 12) {
					sessionStorage.calendarMonth = 1;
					sessionStorage.calendarYear++;
				}
			}

			if (e.target.matches("[data-action~='sub-month']")) {
				sessionStorage.calendarMonth--;

				if (sessionStorage.calendarMonth < 1) {
					sessionStorage.calendarMonth = 12;
					sessionStorage.calendarYear--;
				}
			}

			updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
		}
	});
}
