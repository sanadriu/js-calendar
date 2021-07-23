import { createEventInfo } from "../templates/templates.js";
import getMonthName from "../utils/getMonthName.js";

export default function displayCalendarEventInfo(idEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
	const calendarEvent = calendarEvents.find((calendarEvent) => calendarEvent.id === parseInt(idEvent));

	if (calendarEvent) {
		const body = document.querySelector("body");
		const fragment = createEventInfo();
		const eventInfo = fragment.querySelector("#event-info");

		const date = `${getMonthName(calendarEvent.initialDate.month)} ${calendarEvent.initialDate.day} ${calendarEvent.initialDate.year}`;

		eventInfo.querySelector("[data-action='remove-event']").dataset.event = calendarEvent.id;
		eventInfo.querySelector("#event-info-title").textContent = calendarEvent.title;
		eventInfo.querySelector("#event-info-description").textContent = calendarEvent.description;
		eventInfo.querySelector("#event-info-date").textContent = date;

		const eventHeader = eventInfo.querySelector(".event-info__header");

		switch (calendarEvent.type) {
			case "Meeting":
				eventHeader.className.add("bg-red");
				break;
			case "Task":
				eventHeader.className.add("bg-green");
				break;
			case "Personal":
				eventHeader.className.add("bg-orange");
				break;
			case "Study":
				eventHeader.className.add("bg-blue");
				break;
		}

		body.appendChild(fragment);
	}
}
