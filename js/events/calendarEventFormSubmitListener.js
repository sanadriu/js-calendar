import validateCalendarEventForm from "../validation/calendarEventFormValidation.js";
import closeCalendarEventForm from "../views/closeCalendarEventForm.js";
import { saveEvent } from "./saveEvent.js";

export default function calendarEventFormSubmitListener() {
	const form = document.querySelector("#calendar-event-form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (validateCalendarEventForm()) {
			 const calendarEvent = {
				title: form.title.value,
				initialDate: form.initial_date.value,
				endDate: form.end_date_chk.checked ? form.end_date.value : null,
				endDateCheck: form.end_date_chk.checked,
				reminder: form.reminder_chk.checked ? form.reminder.value : null,
				reminderCheck: form.reminder_chk.checked,
				description: form.description.value,
				type: form.type.value,
			};

			saveEvent(calendarEvent.title, calendarEvent.initialDate, calendarEvent.endDateCheck, calendarEvent.endDate, calendarEvent.reminderCheck, calendarEvent.reminder, calendarEvent.description, calendarEvent.type)

			console.log(calendarEvent);
			closeCalendarEventForm();
		}
	});
}
