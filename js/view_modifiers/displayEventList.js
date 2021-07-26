import getMonthName from "../utils/getMonthName.js";

export default function displayEventList(day) {
	const asideEventsElement = document.querySelector("#calendar-aside-events");
	asideEventsElement.classList.remove("calendar__aside-events--hidden");

	const asideDateElement = asideEventsElement.querySelector("#calendar-aside-date");
	const asideHintElement = asideEventsElement.querySelector("#calendar-aside-hint");

	const calendarYear = sessionStorage.calendarYear;
	const calendarMonthName = getMonthName(sessionStorage.calendarMonth);

	asideDateElement.textContent = `${calendarMonthName} ${day}, ${calendarYear}`;

	if (asideEventsElement.children.length < 3) {
		asideHintElement.classList.remove("no-display");
	} else {
		asideHintElement.classList.add("no-display");
	}
}
