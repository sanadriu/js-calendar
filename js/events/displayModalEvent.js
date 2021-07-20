import displayModal from "../views/displayModal.js";

export default function displayModalEvent() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='display-modal']")) displayModal();
	});
}
