export default function validateDescription() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='description']");

	const description = document.querySelector("[name='description']").value;

	if (description.length > 500) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.add("is-hidden");
	} else {
		warningBox.classList.remove("is-hidden");
	}

	return validity;
}
