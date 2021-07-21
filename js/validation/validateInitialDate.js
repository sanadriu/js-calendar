export default function validateInitialDate() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='initial-date']");

	const initialDate = new Date(document.querySelector("input[name='initial_date']").value);
	const formDate = new Date(document.querySelector("#event-form").dataset.date);

	if (initialDate < formDate) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.remove("is-hidden");
	} else {
		warningBox.classList.add("is-hidden");
	}

	return validity;
}
