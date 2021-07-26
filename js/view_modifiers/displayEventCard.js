import { createEventCard } from "../templates/templates.js";

export default function displayEventCard(calendarEvent) {
	const initialDate = new Date(calendarEvent.initialDate);
	const time = `${initialDate.getHours().toString().padStart(2, "0")}:${initialDate.getMinutes().toString().padStart(2, "0")}`;
	const title = calendarEvent.title;
	const idEvent = calendarEvent.id;

	const fragment = createEventCard();
	const eventCard = fragment.querySelector(".event-card");

	eventCard.children[0].textContent = `${time} - ${title}`;
	eventCard.children[1].dataset.event = idEvent;

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
}

/*
for (let eventTag of eventTags) {
	if (eventTag.matches(".event-tag")) {
		let newInfo = document.createElement("article");
		let erase = document.createElement("img");
		let info = document.createElement("span");

		info.innerHTML = `${eventTag.querySelector(".event-tag__hour").textContent} - ${eventTag.querySelector(".event-tag__title").textContent}`;
		newInfo.className = "aside__event";
		erase.dataset.event = eventTag.dataset.event;
		info.className = "aside__span";
		erase.src = "./assets/img/delete.svg";
		erase.className = "event__icon-top";
		erase.dataset.action = "remove-event";
		erase.dataset.action += " display-day-info";
		erase.dataset.event = eventTag.dataset.event;
		erase.dataset.day = day;

		newInfo.appendChild(info);
		newInfo.appendChild(erase);
		asideEventsElement.appendChild(newInfo);

		switch (eventTag.className) {
			case "event-tag bg-red":
				newInfo.style.backgroundColor = "red";
				break;
			case "event-tag bg-orange":
				newInfo.style.backgroundColor = "orange";
				break;
			case "event-tag bg-green":
				newInfo.style.backgroundColor = "green";
				break;
			case "event-tag bg-blue":
				newInfo.style.backgroundColor = "blue";
				break;
			default:
				break;
		}
	}
}*/
