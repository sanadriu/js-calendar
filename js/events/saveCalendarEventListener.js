import validateCalendarEventForm from "../validations/calendarEventFormValidation.js";
import closeEventForm from "../view_modifiers/closeEventForm.js";
import saveCalendarEvent from "../utils/saveCalendarEvent.js";
import displayEventTags from "../view_modifiers/displayEventTags.js";
import displayEventCards from "../view_modifiers/displayEventCards.js";
import clearEventTags from "../view_modifiers/clearEventTags.js";
import clearEventCards from "../view_modifiers/clearEventCards.js";

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
			const calendarEventDay = calendarEventDate.getDate();

			clearEventTags(calendarEventYear, calendarEventMonth, calendarEventDay);
			displayEventTags(calendarEventYear, calendarEventMonth, calendarEventDay);

			const calendarYear = parseInt(sessionStorage.calendarYear);
			const calendarMonth = parseInt(sessionStorage.calendarMonth);
			const calendarDay = parseInt(sessionStorage.calendarDay);

			if (!document.querySelector("#day-info").classList.contains("day-info--hidden") && calendarEventYear === calendarYear && calendarEventMonth === calendarMonth && calendarEventDay === calendarDay) {
				clearEventCards();
				displayEventCards(calendarEventYear, calendarEventMonth, calendarEventDay);
			}
		}
	});
}
