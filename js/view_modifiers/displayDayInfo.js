import getMonthName from "../utils/getMonthName.js";
import clearEventCards from "./clearEventCards.js";
import displayEventCards from "./displayEventCards.js";

export default function displayDayInfo(year, month, day) {
	const eventList = document.querySelector("#event-list");

	const calendarYear = year;
	const calendarMonthName = getMonthName(month);

	eventList.classList.remove("event-list--hidden");
	eventList.querySelector("#event-list-date").textContent = `${calendarMonthName} ${day}, ${calendarYear}`;

	//const eventTags = document.querySelector(`[data-day='${day}']`).querySelectorAll(".event-tag");

	clearEventCards();
	displayEventCards(year, month, day);

	//?¿Podríamos integrar este if en el anterior para que, si el día tiene un hijo de clase ".event-tag", el aviso salga "no-display"?
	if (asideEventsElement.children.length < 3) {
		asideHintElement.classList.remove("no-display");
	} else {
		asideHintElement.classList.add("no-display");
	}
}
