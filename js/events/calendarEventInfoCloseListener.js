import closeCalendarEventInfo from "../view_modifiers/closeCalendarEventInfo.js";

export default function calendarEventInfoCloseListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action~='close-event-info']")) closeCalendarEventInfo();
	});
}
