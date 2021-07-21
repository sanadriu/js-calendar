export default function displayEndDate() {
	const endDateCheck = document.querySelector("input[name='end_date_chk']");
	const endDateInput = document.querySelector("input[name='end_date']");
	const endDateLabel = document.querySelector("label[for='end-date']");

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

document.addEventListener("change", (e) => {
	if (e.target.matches("#end-date-chk")) {
		displayEndDate();
	}
});
