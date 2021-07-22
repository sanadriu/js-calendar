import displayEndDateInput from "../views/displayEndDateInput.js";
import displayReminderInput from "../views/displayReminderInput.js";

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
