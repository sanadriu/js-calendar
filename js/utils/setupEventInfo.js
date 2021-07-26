import { setupEventInfoTitle, setupEventInfoDescription, setupEventInfoInitialDate, setupEventInfoEndDate, setupEventInfoReminder, setupEventInfoType } from "./setupEventInfoFunctions.js";

export default function setupEventInfo(calendarEvent, fragment) {
	const calendarEventInfoElement = fragment.querySelector("#event-info");

	setupEventInfoTitle(calendarEvent, calendarEventInfoElement.querySelector("#event-info-title"));
	setupEventInfoDescription(calendarEvent, calendarEventInfoElement.querySelector("#event-info-description"));
	setupEventInfoInitialDate(calendarEvent, calendarEventInfoElement.querySelector("#event-info-initial-date"));
	setupEventInfoEndDate(calendarEvent, calendarEventInfoElement.querySelector("#event-info-end-date"));
	setupEventInfoReminder(calendarEvent, calendarEventInfoElement.querySelector("#event-info-reminder"));
	setupEventInfoType(calendarEvent, calendarEventInfoElement.querySelector("#event-info-header"));

	calendarEventInfoElement.querySelector("[data-action~='remove-event']").dataset.event = calendarEvent.id;
}
