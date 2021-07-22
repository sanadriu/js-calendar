export default function displayEndDateInput() {
	const endDateCheck = document.querySelector("[name='end_date_chk']");
	const endDateInput = document.querySelector("[name='end_date']");
	const endDateLabel = document.querySelector("[for='end-date']");

	if (endDateCheck.checked) {
		endDateLabel.classList.remove("no-display");
		endDateInput.classList.remove("no-display");
		endDateInput.disabled = false;
	} else {
		endDateLabel.classList.add("no-display");
		endDateInput.classList.add("no-display");
		endDateInput.disabled = true;
	}
}
