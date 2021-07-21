export default function validateTitle() {
	let validity = true;

	const warningBox = document.querySelector("[data-warning='title']");

	const title = document.querySelector("input[name='title']").value;

	if (title.length === 0 || title.length > 60) {
		validity = false;
	}

	if (validity) {
		warningBox.classList.remove("is-hidden");
	} else {
		warningBox.classList.add("is-hidden");
	}

	return validity;
}
