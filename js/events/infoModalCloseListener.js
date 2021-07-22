import closeInfoModal from "../views/closeInfoModal.js"

export default function infoModalCloseListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-info-modal']")) closeInfoModal();
	});
}
