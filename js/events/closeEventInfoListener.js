import closeEventInfo from "../view_modifiers/closeEventInfo.js";

export default function closeEventInfoListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='close-event-info']")) closeEventInfo();
	});
}
