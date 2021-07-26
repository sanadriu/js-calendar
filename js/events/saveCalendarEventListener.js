import validateCalendarEventForm from "../validations/calendarEventFormValidation.js";
import closeEventForm from "../view_modifiers/closeEventForm.js";
import saveCalendarEvent from "../utils/saveCalendarEvent.js";
import displayEventTag from "../view_modifiers/displayEventTag.js";

export default function saveCalendarEventListener() {
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
			closeEventForm();

			const calendarEventDate = new Date(calendarEvent.initialDate);
			const calendarEventYear = calendarEventDate.getFullYear();
			const calendarEventMonth = calendarEventDate.getMonth() + 1;

			if (parseInt(sessionStorage.year) === calendarEventYear && parseInt(sessionStorage.month) === calendarEventMonth) {
				displayEventTag(calendarEvent);
			}
		}
	});
}
