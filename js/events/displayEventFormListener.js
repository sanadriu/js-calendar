import displayEventForm from "../view_modifiers/displayEventForm.js";

export default function displayEventFormListener() {
	document.addEventListener("click", (e) => {
		if (document.querySelector("#modal-event-form") !== null) return;
		if (!e.target.matches("[data-action~='display-event-form']") && !e.target.matches("[data-action~='display-event-form'] > *")) return;

		if (e.target.matches("[data-action~='set-cell-date']") || e.target.matches("[data-action~='set-cell-date'] > *")) return displayEventForm(sessionStorage.calendarYear, sessionStorage.calendarMonth, parseInt(e.target.dataset.day));
		if (e.target.matches("[data-action~='set-current-date']") || e.target.matches("[data-action~='set-current-date'] > *")) return displayEventForm();
	});
}
