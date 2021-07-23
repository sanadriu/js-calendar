import { createEventInfo } from "../templates/templates.js";
import getMonthName from "../utils/getMonthName.js";
import getBreakdownDate from "../utils/getBreakdownDate.js";

export default function displayCalendarEventInfo(idEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
	const calendarEvent = calendarEvents.find((calendarEvent) => calendarEvent.id === parseInt(idEvent));

	if (calendarEvent) {
		const body = document.querySelector("body");
		const fragment = createEventInfo();
		const eventInfo = fragment.querySelector("#event-info");

		switch (calendarEvent.type) {
			case "Meeting":
				eventHeader.classList.add("bg-red");
				break;
			case "Task":
				eventHeader.classList.add("bg-green");
				break;
			case "Personal":
				eventHeader.classList.add("bg-orange");
				break;
			case "Study":
				eventHeader.classList.add("bg-blue");
				break;
		}

		body.appendChild(fragment);
	}
}

function setupCalendarEventInfo(calendarEvent) {
	const calendarEventInitialDate = getBreakdownDate(new Date(calendarEvent.initialDate));
	const calendarEventEndDate = getBreakdownDate(new Date(calendarEvent.endDate));

	const dateStr = `${calendarEventInitialDate.day} of ${getMonthName(calendarEventInitialDate.month)}, ${calendarEventInitialDate.year}`;
	const timeStr = `${calendarEventInitialDate.hours}:${calendarEventInitialDate.minutes}`;

	eventInfo.querySelector("[data-action='remove-event']").dataset.event = calendarEvent.id;

	eventInfo.querySelector("#event-info-title").textContent = calendarEvent.title;
	eventInfo.querySelector("#event-info-description").textContent = calendarEvent.description || "There's no description for this event.";
	eventInfo.querySelector("#event-info-initial-date").textContent = `${dateStr} - ${timeStr}`;
	eventInfo.querySelector("#event-info-end-date").textContent = timeStr;

	const eventTitle = eventInfo.querySelector("#event-info-title");
	const eventDescription = eventInfo.querySelector("#event-info-description");
	const eventHeader = eventInfo.querySelector("#event-info-header");
	const eventInitialDate = eventInfo.querySelector("#event-info-initial-date");
	const eventEndDate = eventInfo.querySelector("#event-info-end-date");
}

function displayInitialDate(calendarEvent, target) {
	const calendarEventInitialDate = getBreakdownDate(new Date(calendarEvent.initialDate));

	const dateStr = `${calendarEventInitialDate.day} of ${getMonthName(calendarEventInitialDate.month)}, ${calendarEventInitialDate.year}`;
	const timeStr = `${calendarEventInitialDate.hours}:${calendarEventInitialDate.minutes}`;

	target.textContent = `${dateStr} - ${timeStr}`;
}

function displayEndDate(calendarEvent, target) {
	const calendarEventInitialDate = getBreakdownDate(new Date(calendarEvent.initialDate));

	const dateStr = `${calendarEventInitialDate.day} of ${getMonthName(calendarEventInitialDate.month)}, ${calendarEventInitialDate.year}`;
	const timeStr = `${calendarEventInitialDate.hours}:${calendarEventInitialDate.minutes}`;

	target.textContent = `${dateStr} - ${timeStr}`;
}
