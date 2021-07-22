import closeCalendarEventForm from "../view_modifiers/closeCalendarEventForm.js";

export default function calendarEventFormCloseListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-event-form']") && document.querySelector("#modal-event-form") !== null) closeCalendarEventForm();
	});
}
