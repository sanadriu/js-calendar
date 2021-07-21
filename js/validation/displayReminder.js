export default function validateCheckReminder() {
	const reminderCheck = document.querySelector("input[name='reminder_chk']");
	const reminderInput = document.querySelector("input[name='reminder']");
	const reminderLabel = document.querySelector("label[for='reminder']");

	if (reminderCheck.checked) {
		reminderLabel.classList.remove("is-hidden");
		reminderInput.classList.remove("is-hidden");
		reminderInput.disabled = false;
	} else {
		reminderLabel.classList.add("is-hidden");
		reminderInput.classList.add("is-hidden");
		reminderInput.disabled = true;
	}
}
