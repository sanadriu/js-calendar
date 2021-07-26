import { createEventCard } from "../templates/templates.js";

export default function displayEventCard(calendarEvent, eventList) {
	const initialDate = new Date(calendarEvent.initialDate);
	const time = `${initialDate.getHours().toString().padStart(2, "0")}:${initialDate.getMinutes().toString().padStart(2, "0")}`;
	const title = calendarEvent.title;
	const idEvent = calendarEvent.id;

	const fragment = createEventCard();
	const eventCard = fragment.querySelector(".event-card");

	eventCard.children[0].textContent = `${time} - ${title}`;
	eventCard.children[1].dataset.event = idEvent;
	eventCard.dataset.event = idEvent;

	switch (calendarEvent.type) {
		case "Meeting":
			eventCard.classList.add("bg-red");
			break;
		case "Task":
			eventCard.classList.add("bg-green");
			break;
		case "Personal":
			eventCard.classList.add("bg-orange");
			break;
		case "Study":
			eventCard.classList.add("bg-blue");
			break;
	}

	eventList.appendChild(fragment);
}
