export default function filterEventsByType(type, filter) {
	const calendarGrid = document.querySelector("#calendar-grid");

	switch (type) {
		case "Meeting":
			filter ? calendarGrid.classList.add("no-display-red-events") : calendarGrid.classList.remove("no-display-red-events");
			break;
		case "Task":
			filter ? calendarGrid.classList.add("no-display-green-events") : calendarGrid.classList.remove("no-display-green-events");
			break;
		case "Personal":
			filter ? calendarGrid.classList.add("no-display-orange-events") : calendarGrid.classList.remove("no-display-orange-events");
			break;
		case "Study":
			filter ? calendarGrid.classList.add("no-display-blue-events") : calendarGrid.classList.remove("no-display-blue-events");
			break;
	}
}
