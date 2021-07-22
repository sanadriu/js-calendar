import { createEventTag } from "../templates/templates.js";
import calendarEventInfoDisplayListener from "../events/calendarEventInfoDisplayListener.js";

export function displayCalendarEventTags(year, month) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	calendarEvents.sort(sortCalendarEvents).filter(filterCalendarEvents).forEach(displayCalendarEventTag);

	calendarEventInfoDisplayListener();
}

function displayCalendarEventTag(event) {
	const calendarCell = document.querySelector(`[data-day='${event.initialDate.day}']`);
	const fragment = createEventTag();

	const eventTag = fragment.querySelector("event-tag");

	eventTag.children[0].textContent = event.initialDate.time;
	eventTag.children[1].textContent = event.title;

	switch (event.type) {
		case "Meeting":
			eventTag.className.add("event-tag--red");
			break;
		case "Task":
			eventTag.className.add("event-tag--green");
			break;
		case "Personal":
			eventTag.className.add("event-tag--orange");
			break;
		case "Study":
			eventTag.className.add("event-tag--blue");
			break;
	}

	calendarCell.appendChild(fragment);
}

function sortCalendarEvents(event01, event02) {
	if (event01.initialDate.time < event02.initialDate.time) return -1;
	if (event01.initialDate.time > event02.initialDate.time) return 1;

	return 0;
}

function filterCalendarEvents(event) {
	return parseInt(event.initialDate.year) === year && parseInt(event.initialDate.month) === month;
}
