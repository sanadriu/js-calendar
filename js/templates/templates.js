export function createCalendarCell() {
	const fragment = document.createDocumentFragment();
	const template = document.querySelector("#template-calendar-cell").content.cloneNode(true);

	fragment.appendChild(template);

	return fragment;
}

export function createCalendarCellEvent() {
	const fragment = document.createDocumentFragment();
	const template = document.querySelector("#template-calendar-event").content.cloneNode(true);

	fragment.appendChild(template);

	return fragment;
}

export function createCalendarEventForm() {
	const fragment = document.createDocumentFragment();
	const template = document.querySelector("#template-event-form").content.cloneNode(true);

	fragment.appendChild(template);

	return fragment;
}

export function createModalInfo() {
	const fragment = document.createDocumentFragment();
	const template = document.querySelector("#template-event-info").content.cloneNode(true);

	fragment.appendChild(template);

	return fragment;
}
