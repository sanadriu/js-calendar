import updateCalendar from "../views/updateCalendar.js";

export default function updateCalendarEvent() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='update-calendar']")) {
			const calendarDate = new Date(sessionStorage.calendarDateISO);

			if (e.target.matches("[data-action~='add-month']")) calendarDate.setMonth(calendarDate.getMonth() + 1);
			if (e.target.matches("[data-action~='sub-month']")) calendarDate.setMonth(calendarDate.getMonth() - 1);

			sessionStorage.calendarDateISO = calendarDate.toISOString();

			updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
		}
	});
}
