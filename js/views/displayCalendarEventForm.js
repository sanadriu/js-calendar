import calendarEventFormChangeListener from "../events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "../events/calendarEventFormSubmitListener.js";

import { createModal } from "../templates/templates.js";

export default function displayCalendarEventForm() {
	const body = document.querySelector("body");
	const modal = createModal();

	const defaultDateISO = new Date().toISOString().substring(0, 16);
	const form = modal.querySelector("#calendar-event-form");
	const inputs = form.elements;

	form.dataset.date = defaultDateISO;
	inputs.initial_date.min = defaultDateISO;
	inputs.initial_date.value = defaultDateISO;
	inputs.end_date.min = defaultDateISO;
	inputs.end_date.value = defaultDateISO;

	body.appendChild(modal);

	calendarEventFormChangeListener();
	calendarEventFormSubmitListener();
}
