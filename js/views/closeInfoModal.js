export default function closeInfoModal() {
	const modal = document.querySelector("#modal-info-event");

	if (modal !== null) modal.remove();
}
