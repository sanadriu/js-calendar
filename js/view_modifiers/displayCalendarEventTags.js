import calendarEventInfoDisplayListener from "../events/calendarEventInfoDisplayListener.js";
import displayCalendarEventTag from "./displayCalendarEventTag.js";

export default function displayCalendarEventTags(year, month) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	const filterCalendarEvents = function (calendarEvent) {
		const calendarEvenDate = new Date(calendarEvent.initialDate);
		const calendarEvenYear = calendarEvenDate.getFullYear();
		const calendarEventMonth = calendarEvenDate.getMonth() + 1;

		return year === calendarEvenYear && month === calendarEventMonth;
	};

	calendarEvents.filter(filterCalendarEvents).forEach(displayCalendarEventTag);

	calendarEventInfoDisplayListener();
}
