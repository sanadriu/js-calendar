function createFromTemplate(templateSelector) {
	const fragment = document.createDocumentFragment();
	const template = document.querySelector(templateSelector).content.cloneNode(true);

	fragment.appendChild(template);

	return fragment;
}

export function createCalendarCell() {
	return createFromTemplate("#template-calendar-cell");
}

export function createEventTag() {
	return createFromTemplate("#template-event-tag");
}

export function createEventForm() {
	return createFromTemplate("#template-event-form");
}

export function createEventInfo() {
	return createFromTemplate("#template-event-info");
}


export function createEventNotification() {
	return createFromTemplate("#template-notification-event");
}
