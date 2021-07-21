import { createModal } from "../templates/templates.js";
import { prepareForm } from "../validation/validate.js";

export default function displayModal() {
	const body = document.querySelector("body");
	const modal = createModal();

	const defaultDateISO = new Date().toISOString();

	modal.querySelector("#event-form").dataset.date = defaultDateISO;
	modal.querySelector("input[name='initial_date']").value = defaultDateISO;
	modal.querySelector("input[name='end_date']").value = defaultDateISO;

	body.appendChild(modal);
}
