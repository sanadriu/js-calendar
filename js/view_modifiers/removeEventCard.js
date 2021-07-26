export default function removeEventCard(idEvent) {
	const eventCard = document.querySelector(`.event-card[data-event='${idEvent}']`);

	if (eventCard !== null) {
		eventCard.remove();

		const dayInfoHint = document.querySelector("#day-info-hint");
		const eventList = document.querySelector("#event-list");
		eventList.childElementCount > 0 ? dayInfoHint.classList.add("no-display") : dayInfoHint.classList.remove("no-display");
	}
}
