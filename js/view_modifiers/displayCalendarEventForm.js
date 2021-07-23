import calendarEventFormChangeListener from "../events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "../events/calendarEventFormSubmitListener.js";
import getDateISO from "../utils/getDateISO.js";
import setFormDates from "../utils/setFormDates.js";
import { createEventForm } from "../templates/templates.js";

export default function displayCalendarEventForm(year, month, day) {
	const body = document.querySelector("body");
	const fragment = createEventForm();
	const form = fragment.querySelector("#event-form");

	const defaultDateISO = year && month && day ? getDateISO(year, month, day) : getDateISO();
	sessionStorage.lastFormDateISO = getDateISO();
	setFormDates(form, ["initial_date", "end_date"], defaultDateISO, sessionStorage.lastFormDateISO);

	body.appendChild(fragment);
	calendarEventFormChangeListener();
	calendarEventFormSubmitListener();
}
