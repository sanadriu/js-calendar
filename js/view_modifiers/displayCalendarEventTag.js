import { createEventTag } from "../templates/templates.js";

export default function displayCalendarEventTag(calendarEvent) {
	const initialDate = new Date(calendarEvent.initialDate);
	const time = `${initialDate.getHours().toString().padStart(2, "0")}:${initialDate.getMinutes().toString().padStart(2, "0")}`;

	const calendarCell = document.querySelector(`[data-day='${initialDate.getDate()}']`);
	const fragment = createEventTag();

	const eventTag = fragment.querySelector("event-tag");

	eventTag.children[0].textContent = time;
	eventTag.children[1].textContent = calendarEvent.title;

	switch (calendarEvent.type) {
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
