import updateCalendar from "../view_modifiers/updateCalendar.js";
import removeCalendarEvent from "../utils/removeCalendarEvent.js";
import removeEventTag from "../view_modifiers/removeEventTag.js";

export default function removeCalendarEventListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='remove-event']")) {
			removeCalendarEvent();
			removeEventTag();
			//updateCalendar(parseInt(sessionStorage.calendarYear), parseInt(sessionStorage.calendarMonth));
		}
	});
}
