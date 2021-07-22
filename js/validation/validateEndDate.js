export default function validateEndDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='end-date']");

	const endDateCheck = document.querySelector("[name='end_date_chk']");

	if (endDateCheck.checked) {
		const endDate = new Date(document.querySelector("[name='end_date']").value);
		const initialDate = new Date(document.querySelector("[name='initial_date']").value);
		const allowedYears = [2021, 2022];

		if (endDate < initialDate || !allowedYears.includes(initialDate.getFullYear())) {
			validity = false;
		}
	}

	if (validity) {
		warningBox.classList.add("is-hidden");
	} else {
		warningBox.classList.remove("is-hidden");
	}

	return validity;
}
