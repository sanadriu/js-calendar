import getDateTimeFormat from "./getDateTimeFormat.js";

export function setupCalendarEventTitle(calendarEvent, target) {
	target.textContent = calendarEvent.title;
}

export function setupCalendarEventDescription(calendarEvent, target) {
	calendarEvent.description ? (target.textContent = calendarEvent.description) : target.parentElement.classList.add("no-display");
}

export function setupCalendarEventInitialDate(calendarEvent, target) {
	target.textContent = getDateTimeFormat("es-ES", calendarEvent.initialDate);
}

export function setupCalendarEventEndDate(calendarEvent, target) {
	calendarEvent.endDateChk ? (target.textContent = getDateTimeFormat("es-ES", calendarEvent.endDate)) : target.parentElement.parentElement.classList.add("no-display");
}

export function setupCalendarEventReminder(calendarEvent, target) {
	calendarEvent.reminderChk ? (target.textContent = `${calendarEvent.reminder} minutes`) : target.parentElement.parentElement.classList.add("no-display");
}

export function setupCalendarEventTypeColor(calendarEvent, target) {
	switch (calendarEvent.type) {
		case "Meeting":
			target.classList.add("bg-red");
			break;
		case "Task":
			target.classList.add("bg-green");
			break;
		case "Personal":
			target.classList.add("bg-orange");
			break;
		case "Study":
			target.classList.add("bg-blue");
			break;
	}
}
