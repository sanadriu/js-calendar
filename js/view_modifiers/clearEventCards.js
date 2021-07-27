export default function clearEventCards() {
	document
		.querySelector("#event-list")
		.querySelectorAll(".event-card")
		.forEach((eventCard) => {
			eventCard.remove();
		});
}
