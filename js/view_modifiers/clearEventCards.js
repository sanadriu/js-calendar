export default function clearEventCards(eventList) {
	eventList.querySelectorAll(".event-card").forEach((eventCard) => {
		eventCard.remove();
	});
}
