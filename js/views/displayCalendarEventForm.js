import { createModal } from "../templates/templates.js";

export default function displayCalendarEventForm() {
	const body = document.querySelector("body");
	const modal = createModal();

	const defaultDateISO = new Date().toISOString();
	const form = modal.querySelector("#calendar-event-form");

	form.dataset.date = defaultDateISO;
	form.initial_date.value = defaultDateISO;
	form.end_date.value = defaultDateISO;

	body.appendChild(modal);
}
