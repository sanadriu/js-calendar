import displayEventCard from "./displayEventCard.js";

export default function displayEventCards(year, month, day) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	const filterCalendarEvent = function (calendarEvent) {
		const calendarEventDate = new Date(calendarEvent.initialDate);
		const calendarEventYear = calendarEventDate.getFullYear();
		const calendarEventMonth = calendarEventDate.getMonth() + 1;
		const calendarEventDay = calendarEventDate.getDate();

		return year === calendarEventYear && month === calendarEventMonth && day == calendarEventDay;
	};

	calendarEvents.filter(filterCalendarEvent).forEach(displayEventCard);
}
