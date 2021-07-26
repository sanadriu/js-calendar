import displayEventTag from "./displayEventTag.js";

export default function displayEventTags(year, month, day) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	const filterCalendarEvent = function (calendarEvent) {
		const calendarEventDate = new Date(calendarEvent.initialDate);
		const calendarEventYear = calendarEventDate.getFullYear();
		const calendarEventMonth = calendarEventDate.getMonth() + 1;
		const calendarEventDay = calendarEventDate.getDate();

		return day === undefined ? year === calendarEventYear && month === calendarEventMonth : year === calendarEventYear && month === calendarEventMonth && day === calendarEventDay;
	};

	calendarEvents.filter(filterCalendarEvent).forEach(displayEventTag);
}
