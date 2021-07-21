export default function validateEndDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='end-date']");

	const endDateCheck = document.querySelector("input[name='end_date_chk']");

	if (endDateCheck.checked) {
		const endDate = new Date(document.querySelector("input[name='end_date']").value);
		const initialDate = new Date(document.querySelector("input[name='initial_date']").value);

		if (endDate < initialDate) {
			validity = false;
		}
	}

	if (validity) {
		warningBox.classList.remove("is-hidden");
	} else {
		warningBox.classList.add("is-hidden");
	}

	return validity;
}
