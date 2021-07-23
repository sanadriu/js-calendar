import calendarEventInfoDisplayListener from "../events/calendarEventInfoDisplayListener.js";
import displayCalendarEventTag from "./displayCalendarEventTag.js";

export default function displayCalendarEventTags(year, month) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	const filterCalendarEvents = function (calendarEvent) {
		const calendarEventDate = new Date(calendarEvent.initialDate);
		const calendarEventYear = calendarEventDate.getFullYear();
		const calendarEventMonth = calendarEventDate.getMonth() + 1;

		return year === calendarEventYear && month === calendarEventMonth;
	};

	calendarEvents.filter(filterCalendarEvents).forEach(displayCalendarEventTag);

	calendarEventInfoDisplayListener();
}
