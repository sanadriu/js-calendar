import displayCalendarEventForm from "../views/displayCalendarEventForm.js";

export default function displayCalendarEventFormListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='display-calendar-event-form']") && document.querySelector("#modal-calendar-event-form") === null) displayCalendarEventForm();
	});
}
