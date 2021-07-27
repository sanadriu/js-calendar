import toggleDayInfoHint from "./toggleDayInfoHint.js";

export default function removeEventCard(idEvent) {
	const eventCard = document.querySelector(`.event-card[data-event='${idEvent}']`);

	if (eventCard !== null) {
		eventCard.remove();

		toggleDayInfoHint();
	}
}
