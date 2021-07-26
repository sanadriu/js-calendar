
export default function closeCalendarNotificationEvent() {
	const modal = document.querySelector("#modal-notification-event");

	if (modal !== null) modal.remove();
}
