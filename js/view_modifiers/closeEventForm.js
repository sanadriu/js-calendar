export default function closeEventForm() {
	const modal = document.querySelector("#modal-event-form");

	if (modal !== null) modal.remove();
}
