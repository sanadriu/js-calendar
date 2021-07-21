import displayEndDateInput from "../views/displayEndDateInput.js";
import displayReminderInput from "../views/displayReminderInput.js";

export default function calendarEventFormChangeListener() {
	const form = document.querySelector("#calendar-event-form");

	form.addEventListener("change", (e) => {
		if (e.target.matches("input[name='end_date_chk']")) {
			displayEndDateInput();
		}

		if (e.target.matches("input[name='reminder_chk']")) {
			displayReminderInput();
		}
	});
}
