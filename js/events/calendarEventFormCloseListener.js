import closeCalendarEventForm from "../views/closeCalendarEventForm.js";

export default function closeCalendarEventFormListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-calendar-event-form']") && document.querySelector("#modal-calendar-event-form") !== null) closeCalendarEventForm();
	});
}
