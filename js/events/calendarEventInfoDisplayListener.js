import displayCalendarEventInfo from "../view_modifiers/displayCalendarEventInfo.js";

export default function calendarEventInfoDisplayListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches(".event-tag[data-event]")) {
			displayCalendarEventInfo(e.target.dataset.event);
		} else if (e.target.matches(".event-tag[data-event] > *")) {
			displayCalendarEventInfo(e.target.parentElement.dataset.event);
		}
	});
}
