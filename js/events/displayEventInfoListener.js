import displayEventInfo from "../view_modifiers/displayEventInfo.js";

export default function displayEventInfoListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='display-event-info']")) return displayEventInfo(e.target.dataset.event);
		if (e.target.matches("[data-action~='display-event-info'] > *")) return displayEventInfo(e.target.parentElement.dataset.event);
	});
}
