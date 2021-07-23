import validateCalendarEventForm from "../validations/calendarEventFormValidation.js";
import closeCalendarEventForm from "../view_modifiers/closeCalendarEventForm.js";
import { saveCalendarEvent } from "../utils/saveCalendarEvent.js";

export default function calendarEventFormSubmitListener() {
	const form = document.querySelector("#event-form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (validateCalendarEventForm()) {
			const calendarEvent = {
				id: new Date.getTime(),
				title: form.title.value,
				description: form.description.value,
				type: form.type.value,
				initialDate: form.initial_date.value,
				endDate: form.end_date_chk.checked ? form.end_date.value : null,
				reminder: form.reminder_chk.checked ? form.reminder.value : null,
			};

			saveCalendarEvent(calendarEvent);

			closeCalendarEventForm();
		}
	});
}
