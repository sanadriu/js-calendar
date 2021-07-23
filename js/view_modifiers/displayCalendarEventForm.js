import getDateISO from "../utils/getDateISO.js";
import setupFormDates from "../utils/setupFormDates.js";
import { createEventForm } from "../templates/templates.js";

export default function displayCalendarEventForm(year, month, day) {
	const body = document.querySelector("body");
	const fragment = createEventForm();

	const form = fragment.querySelector("#event-form");

	const defaultDateISO = year && month && day ? getDateISO(year, month, day) : getDateISO();
	sessionStorage.lastFormDateISO = getDateISO();

	setupFormDates(form, ["initial_date", "end_date"], defaultDateISO, sessionStorage.lastFormDateISO);

	body.appendChild(fragment);
}
