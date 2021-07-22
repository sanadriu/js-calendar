export default function validateEndDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='end-date']");

	const endDateCheck = document.querySelector("[name='end_date_chk']");

	if (endDateCheck.checked) {
		const endDate = new Date(document.querySelector("[name='end_date']").value);
		const initialDate = new Date(document.querySelector("[name='initial_date']").value);
		const minimumDate = new Date(sessionStorage.lastFormDateISO);
		const allowedYears = [2021, 2022];

		if (endDate < initialDate || endDate < minimumDate || !allowedYears.includes(initialDate.getFullYear())) {
			validity = false;
		}
	}

	if (validity) {
		warningBox.classList.add("no-display");
	} else {
		warningBox.classList.remove("no-display");
	}

	return validity;
}
