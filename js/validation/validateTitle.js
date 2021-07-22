export default function validateTitle() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='title']");

	const title = document.querySelector("[name='title']").value;

	if (title.length === 0 || title.length > 60) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.add("no-display");
	} else {
		warningBox.classList.remove("no-display");
	}

	return validity;
}
