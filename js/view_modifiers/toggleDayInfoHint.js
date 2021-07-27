export default function toggleDayInfoHint() {
	const eventList = document.querySelector("#event-list");
	const dayInfoHint = document.querySelector("#day-info-hint");

	eventList.childElementCount > 0 ? dayInfoHint.classList.add("no-display") : dayInfoHint.classList.remove("no-display");
}
