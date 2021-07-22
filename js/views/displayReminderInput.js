export default function displayReminderInput() {
	const reminderCheck = document.querySelector("[name='reminder_chk']");
	const reminderInput = document.querySelector("[name='reminder']");
	const reminderLabel = document.querySelector("[for='reminder']");

	if (reminderCheck.checked) {
		reminderLabel.classList.remove("no-display");
		reminderInput.classList.remove("no-display");
		reminderInput.disabled = false;
	} else {
		reminderLabel.classList.add("no-display");
		reminderInput.classList.add("no-display");
		reminderInput.disabled = true;
	}
}
