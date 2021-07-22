export default function closeCalendarEventInfo() {
	const modal = document.querySelector("#modal-event-info");

	if (modal !== null) modal.remove();
}
