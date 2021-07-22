import calendarEventFormChangeListener from "../events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "../events/calendarEventFormSubmitListener.js";

import { createModal } from "../templates/templates.js";

/*
export default function displayCalendarEventForm(date) {
	const body = document.querySelector("body");
	const modal = createModal();

	const form = modal.querySelector("#calendar-event-form");

	const defaultDateISO = getCurrentDate().substring(0, 16);

	form.dataset.date = defaultDateISO;
	form.elements.initial_date.min = defaultDateISO;
	form.elements.initial_date.value = defaultDateISO;
	form.elements.end_date.min = defaultDateISO;
	form.elements.end_date.value = defaultDateISO;

	body.appendChild(modal);

	calendarEventFormChangeListener();
	calendarEventFormSubmitListener();
}
*/

export default function displayCalendarEventForm(year, month, day) {
	const body = document.querySelector("body");
	const modal = createModal();

	const form = modal.querySelector("#calendar-event-form");

	let defaultDateISO;

	if (year && month && day) {
		defaultDateISO = new Date(year, month, day).toISOString().substring(0, 16);
	} else {
		defaultDateISO = new Date().toISOString().substring(0, 16);
	}

	setFormDefaultDates(form, ["initial_date", "end_date"], defaultDateISO);

	body.appendChild(modal);

	calendarEventFormChangeListener();
	calendarEventFormSubmitListener();
}

function setFormDefaultDates(form, inputNameList, defaultDateISO) {
	form.dataset.date = defaultDateISO;

	inputNameList.forEach((inputName) => {
		form.elements[inputName].min = defaultDateISO;
		form.elements[inputName].value = defaultDateISO;
	});
}
