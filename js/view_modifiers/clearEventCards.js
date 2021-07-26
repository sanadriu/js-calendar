export default function clearEventCards() {
	document.querySelectorAll(".event-cards").forEach((eventCard) => {
		eventCard.remove();
	});
}
