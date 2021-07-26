import closeCalendarEventInfo from "../view_modifiers/closeCalendarEventInfo.js";
import updateCalendar from "../view_modifiers/updateCalendar.js";

export default function calendarEventRemoveListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='remove-event']")) {
			const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
			const idEvent = parseInt(e.target.dataset.event);

			localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents.filter((calendarEvent) => calendarEvent.id !== idEvent)));

			updateCalendar(parseInt(sessionStorage.calendarYear), parseInt(sessionStorage.calendarMonth));
		}
	});
}
