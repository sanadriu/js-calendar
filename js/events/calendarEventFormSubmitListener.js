import validateCalendarEventForm from "../validation/calendarEventFormValidation.js";
import closeCalendarEventForm from "../views/closeCalendarEventForm.js";

export default function calendarEventFormSubmitListener() {
	const form = document.querySelector("#calendar-event-form");

	form.addEventListener("submit", (e) => {
		e.preventDefault();

		if (validateCalendarEventForm()) {
			const event = {
				title: form.title.value,
				initialDate: form.initial_date.value,
				endDate: form.end_date_chk.checked ? form.end_date.value : null,
				reminder: form.reminder_chk.checked ? form.reminder.value : null,
				description: form.description.value,
				type: form.type.value,
			};

			console.log(event);
			closeCalendarEventForm();
		}
	});
}
