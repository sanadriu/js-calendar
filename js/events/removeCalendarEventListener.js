import removeCalendarEvent from "../utils/removeCalendarEvent.js";
import removeEventTag from "../view_modifiers/removeEventTag.js";
import removeEventCard from "../view_modifiers/removeEventCard.js";

export default function removeCalendarEventListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='remove-event']")) {
			const idEvent = parseInt(e.target.dataset.event);

			removeCalendarEvent(idEvent);
			removeEventTag(idEvent);
			removeEventCard(idEvent);
		}
	});
}
