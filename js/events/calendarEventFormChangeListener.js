import displayEndDateInput from "../view_modifiers/displayEndDateInput.js";
import displayReminderInput from "../view_modifiers/displayReminderInput.js";

export default function calendarEventFormChangeListener() {
	const form = document.querySelector("#event-form");

	form.addEventListener("change", (e) => {
		if (e.target.matches("[name='end_date_chk']")) {
			displayEndDateInput();
		}

		if (e.target.matches("[name='reminder_chk']")) {
			displayReminderInput();
		}
	});
}
