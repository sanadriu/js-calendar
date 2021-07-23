import { createEventInfo } from "../templates/templates.js";
import setupCalendarEventInfo from "../utils/setupCalendarEventInfo.js";

export default function displayCalendarEventInfo(idEvent) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
	const calendarEvent = calendarEvents.find((calendarEvent) => calendarEvent.id === parseInt(idEvent));

	if (calendarEvent) {
		const body = document.querySelector("body");
		const fragment = createEventInfo();

		setupCalendarEventInfo(calendarEvent, fragment);

		body.appendChild(fragment);
	}
}
