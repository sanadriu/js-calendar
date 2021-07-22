export default function validateInitialDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='initial-date']");

	const initialDate = new Date(document.querySelector("[name='initial_date']").value);
	const minimumDate = new Date(sessionStorage.lastFormDateISO);
	const allowedYears = [2021, 2022];

	if (initialDate < minimumDate || !allowedYears.includes(initialDate.getFullYear())) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.add("no-display");
	} else {
		warningBox.classList.remove("no-display");
	}

	return validity;
}
