export default function closeCalendarEventForm() {
	const modal = document.querySelector("#modal-event-form");

	if (modal !== null) modal.remove();
}
