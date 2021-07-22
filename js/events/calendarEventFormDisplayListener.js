import displayCalendarEventForm from "../views/displayCalendarEventForm.js";

export default function calendarEventFormDisplayListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='display-calendar-event-form']") && document.querySelector("#modal-calendar-event-form") === null) {
			if (e.target.matches(".cell__add-icon")) {
				displayCalendarEventForm(sessionStorage.calendarYear, sessionStorage.calendarMonth, parseInt(e.target.parentElement.dataset.day));
			} else {
				displayCalendarEventForm();
			}
		}
	});
}
