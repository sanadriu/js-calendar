export default function displayEndDateInput() {
	const endDateCheck = document.querySelector("[name='end_date_chk']");
	const endDateInput = document.querySelector("[name='end_date']");
	const endDateLabel = document.querySelector("[for='end-date']");

	if (endDateCheck.checked) {
		endDateLabel.classList.remove("is-hidden");
		endDateInput.classList.remove("is-hidden");
		endDateInput.disabled = false;
	} else {
		endDateLabel.classList.add("is-hidden");
		endDateInput.classList.add("is-hidden");
		endDateInput.disabled = true;
	}
}
