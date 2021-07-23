import {
	setupCalendarEventTitle,
	setupCalendarEventDescription,
	setupCalendarEventInitialDate,
	setupCalendarEventEndDate,
	setupCalendarEventReminder,
	setupCalendarEventTypeColor,
} from "./setupCalendarEventFunctions.js";

export default function setupCalendarEventInfo(calendarEvent, fragment) {
	const calendarEventInfoElement = fragment.querySelector("#event-info");

	setupCalendarEventTitle(calendarEvent, calendarEventInfoElement.querySelector("#event-info-title"));
	setupCalendarEventDescription(calendarEvent, calendarEventInfoElement.querySelector("#event-info-description"));
	setupCalendarEventInitialDate(calendarEvent, calendarEventInfoElement.querySelector("#event-info-initial-date"));
	setupCalendarEventEndDate(calendarEvent, calendarEventInfoElement.querySelector("#event-info-end-date"));
	setupCalendarEventReminder(calendarEvent, calendarEventInfoElement.querySelector("#event-info-reminder"));
	setupCalendarEventTypeColor(calendarEvent, calendarEventInfoElement.querySelector("#event-info-header"));

	calendarEventInfoElement.querySelector("[data-action='remove-event']").dataset.event = calendarEvent.id;
}
