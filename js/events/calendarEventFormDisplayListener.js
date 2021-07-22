import displayCalendarEventForm from "../view_modifiers/displayCalendarEventForm.js";

export default function calendarEventFormDisplayListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='display-event-form']") && document.querySelector("#modal-event-form") === null) {
			if (e.target.matches(".cell__add-icon")) {
				displayCalendarEventForm(sessionStorage.calendarYear, sessionStorage.calendarMonth, parseInt(e.target.parentElement.dataset.day));
			} else {
				displayCalendarEventForm();
			}
		}
	});
}
