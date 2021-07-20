import { createModal } from "../templates/templates.js";

export default function displayModal() {
	const body = document.querySelector("body");
	const modal = createModal();

	body.appendChild(modal);
}
