import getDateTimeFormat from "./getDateTimeFormat.js";

export function setupEventInfoTitle(calendarEvent, target) {
	target.textContent = calendarEvent.title;
}

export function setupEventInfoDescription(calendarEvent, target) {
	calendarEvent.description ? (target.textContent = calendarEvent.description) : target.parentElement.classList.add("no-display");
}

export function setupEventInfoInitialDate(calendarEvent, target) {
	target.textContent = getDateTimeFormat("es-ES", calendarEvent.initialDate);
}

export function setupEventInfoEndDate(calendarEvent, target) {
	calendarEvent.endDateChk ? (target.textContent = getDateTimeFormat("es-ES", calendarEvent.endDate)) : target.parentElement.parentElement.classList.add("no-display");
}

export function setupEventInfoReminder(calendarEvent, target) {
	calendarEvent.reminderChk ? (target.textContent = `${calendarEvent.reminder} minutes`) : target.parentElement.parentElement.classList.add("no-display");
}

export function setupEventInfoType(calendarEvent, target) {
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
