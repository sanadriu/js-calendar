import closeInfoModal from "../views/closeCalendarEventInfo.js";

export default function infoModalCloseListener() {
	document.addEventListener("click", (e) => {
		e.stopPropagation();

		if (e.target.matches("[data-action='close-event-info']")) closeInfoModal();
	});
}
