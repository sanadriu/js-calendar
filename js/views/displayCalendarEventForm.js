import calendarEventFormChangeListener from "../events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "../events/calendarEventFormSubmitListener.js";
import getDateISO from "../helpers/getDateISO.js";
import { createCalendarEventForm } from "../templates/templates.js";

export default function displayCalendarEventForm(year, month, day) {
	const body = document.querySelector("body");
	const modal = createCalendarEventForm();
	const form = modal.querySelector("#event-form");

	const defaultDateISO = year && month && day ? getDateISO(year, month, day) : getDateISO();
	sessionStorage.lastFormDateISO = getDateISO();
	setFormDates(form, ["initial_date", "end_date"], defaultDateISO, sessionStorage.lastFormDateISO);

	body.appendChild(modal);
	calendarEventFormChangeListener();
	calendarEventFormSubmitListener();
}

function setFormDates(form, inputNameList, defaultDateISO, minimumDateISO, maximumDateISO) {
	inputNameList.forEach((inputName) => {
		form.elements[inputName].value = defaultDateISO;
		if (minimumDateISO) form.elements[inputName].min = minimumDateISO;
		if (maximumDateISO) form.elements[inputName].max = maximumDateISO;
	});
}
