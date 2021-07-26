import { createEventTag } from "../templates/templates.js";

export default function displayEventTag(calendarEvent) {
	const initialDate = new Date(calendarEvent.initialDate);
	const time = `${initialDate.getHours().toString().padStart(2, "0")}:${initialDate.getMinutes().toString().padStart(2, "0")}`;
	const title = calendarEvent.title;
	const idEvent = calendarEvent.id;

	const calendarCell = document.querySelector(`[data-day='${initialDate.getDate()}']`);
	const fragment = createEventTag();
	const eventTag = fragment.querySelector(".event-tag");

	eventTag.dataset.event = idEvent;
	eventTag.children[0].textContent = time;
	eventTag.children[1].textContent = title;

	switch (calendarEvent.type) {
		case "Meeting":
			eventTag.classList.add("bg-red");
			break;
		case "Task":
			eventTag.classList.add("bg-green");
			break;
		case "Personal":
			eventTag.classList.add("bg-orange");
			break;
		case "Study":
			eventTag.classList.add("bg-blue");
			break;
	}

	calendarCell.appendChild(fragment);
}
