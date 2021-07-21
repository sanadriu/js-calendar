import closeModal from "../views/closeModal.js";

export default function closeModalEvent() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-modal']") && document.querySelector("#modal") !== null) closeModal();
	});

	document.addEventListener("submit", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-modal']") && document.querySelector("#modal") !== null) closeModal();
	});
}
