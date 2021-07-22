import calendarEventFormChangeListener from "../events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "../events/calendarEventFormSubmitListener.js";
import getDateISO from "../helpers/getDateISO.js";
import { createModal } from "../templates/templates.js";

export default function displayCalendarEventForm(year, month, day) {
	const body = document.querySelector("body");
	const modal = createModal();

	const form = modal.querySelector("#calendar-event-form");
	const formDateISO = year && month && day ? getDateISO(year, month, day) : getDateISO();

	setFormDefaultDates(form, ["initial_date", "end_date"], formDateISO);

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
