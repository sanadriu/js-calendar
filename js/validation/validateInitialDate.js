export default function validateInitialDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='initial-date']");

	const initialDate = new Date(document.querySelector("[name='initial_date']").value);
	const formDate = new Date(document.querySelector("#calendar-event-form").dataset.date);
	const allowedYears = [2021, 2022];

	if (initialDate < formDate || !allowedYears.includes(initialDate.getFullYear())) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.add("is-hidden");
	} else {
		warningBox.classList.remove("is-hidden");
	}

	return validity;
}
