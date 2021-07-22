export default function closeCalendarEventForm() {
	const modal = document.querySelector("#modal-calendar-event-form");

	if (modal !== null) modal.remove();
}
