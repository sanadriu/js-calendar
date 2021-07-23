import displayCalendarEventTags from "../view_modifiers/displayCalendarEventTags.js";
import closeCalendarEventInfo from "../view_modifiers/closeCalendarEventInfo.js";

export default function calendarEventRemoveListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action='remove-event']")) {
			const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
			const idEvent = parseInt(e.target.dataset.event);

			localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents.filter((calendarEvent) => calendarEvent.id !== idEvent)));

			closeCalendarEventInfo();
			displayCalendarEventTags(calendarEvents, sessionStorage.calendarYear, sessionStorage.calendarMonth);
		}
	});
}
