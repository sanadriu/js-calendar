import { createEventInfo } from "../templates/templates.js";
import setupEventInfo from "../utils/setupEventInfo.js";

export default function displayEventInfo(idEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
	const calendarEvent = calendarEvents.find((calendarEvent) => calendarEvent.id === parseInt(idEvent));

	if (calendarEvent) {
		const body = document.querySelector("body");
		const fragment = createEventInfo();

		setupEventInfo(calendarEvent, fragment);

		body.appendChild(fragment);
	}
}
