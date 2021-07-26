import displayEventTag from "./displayEventTag.js";

export default function displayEventTags(year, month) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	const filterCalendarEvent = function (calendarEvent) {
		const calendarEventDate = new Date(calendarEvent.initialDate);
		const calendarEventYear = calendarEventDate.getFullYear();
		const calendarEventMonth = calendarEventDate.getMonth() + 1;

		return year === calendarEventYear && month === calendarEventMonth;
	};

	calendarEvents.filter(filterCalendarEvent).forEach(displayEventTag);
}
