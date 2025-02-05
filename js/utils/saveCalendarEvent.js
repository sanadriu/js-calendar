import sortCalendarEvents from "./sortCalendarEvents.js";

export default function saveCalendarEvent(calendarEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	calendarEvents.push(calendarEvent);
	calendarEvents.sort(sortCalendarEvents);

	localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
}
