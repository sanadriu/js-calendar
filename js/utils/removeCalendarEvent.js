export default function removeCalendarEvent(idEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents.filter((calendarEvent) => calendarEvent.id !== idEvent)));
}
