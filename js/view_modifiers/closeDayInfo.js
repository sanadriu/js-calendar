export default function closeDayInfo() {
	const dayInfo = document.querySelector("#day-info");
	const calendarGrid = document.querySelector("#calendar-grid");

	dayInfo.classList.add("day-info--hidden");
	calendarGrid.classList.add("calendar-grid--full");
}
