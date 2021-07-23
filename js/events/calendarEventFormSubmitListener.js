import validateCalendarEventForm from "../validations/calendarEventFormValidation.js";
import closeCalendarEventForm from "../view_modifiers/closeCalendarEventForm.js";
import { saveCalendarEvent } from "../utils/saveCalendarEvent.js";
import updateCalendar from "../view_modifiers/updateCalendar.js";

export default function calendarEventFormSubmitListener() {
	document.addEventListener("submit", (e) => {
		e.preventDefault();
		const form = e.target;

		if (form.matches("#event-form") && validateCalendarEventForm()) {
			const calendarEvent = {
				id: new Date().getTime(),
				title: form.title.value,
				description: form.description.value,
				type: form.type.value,
				initialDate: form.initial_date.value,
				endDate: form.end_date_chk.checked ? form.end_date.value : null,
				endDateChk: form.end_date_chk.checked,
				reminder: form.reminder_chk.checked ? form.reminder.value : null,
				reminderChk: form.reminder_chk.checked,
			};

			saveCalendarEvent(calendarEvent);

			closeCalendarEventForm();
			updateCalendar(parseInt(sessionStorage.calendarYear), parseInt(sessionStorage.calendarMonth));
		}
	});
}
