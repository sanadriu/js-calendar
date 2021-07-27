import updateCalendar from "../view_modifiers/updateCalendar.js";

export default function init() {
	document.addEventListener("DOMContentLoaded", (e) => {
		if (!localStorage.getItem("calendarEvents")) {
			localStorage.calendarEvents = JSON.stringify([]);
		}

		const currentDate = new Date();

		sessionStorage.calendarYear = currentDate.getFullYear();
		sessionStorage.calendarMonth = currentDate.getMonth() + 1;

		updateCalendar(parseInt(sessionStorage.calendarYear), parseInt(sessionStorage.calendarMonth));
	});
}
