export default function removeEventCard(idEvent) {
	const eventList = document.querySelector(`#event-list`);
	const eventCard = eventList.querySelector(`.event-card[data-event='${idEvent}']`);

	if (eventCard !== null) {
		eventCard.remove();
		eventList.childElementCount > 0 ? dayInfoHint.classList.add("no-display") : dayInfoHint.classList.remove("no-display");
	}
}
