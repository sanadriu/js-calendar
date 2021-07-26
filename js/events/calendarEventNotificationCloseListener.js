import closeCalendarNotificationEvent from '../view_modifiers/closeCalendarNotificationEvent.js';

export default function calendarEventNotificationCloseListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-event-notification']") && document.querySelector("#modal-notification-event") !== null) closeCalendarNotificationEvent();
	});
}


