import closeEventForm from "../view_modifiers/closeEventForm.js";

export default function closeEventFormListener() {
	document.addEventListener("click", (e) => {
		if (document.querySelector("#modal-event-form") === null) return;

		if (e.target.matches("[data-action~='close-event-form']")) return closeEventForm();
	});
}
