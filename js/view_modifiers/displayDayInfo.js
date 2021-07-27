import getMonthName from "../utils/getMonthName.js";
import clearEventCards from "./clearEventCards.js";
import displayEventCards from "./displayEventCards.js";

export default function displayDayInfo(year, month, day) {
	const dayInfo = document.querySelector("#day-info");

	const calendarYear = year;
	const calendarMonthName = getMonthName(month);

	dayInfo.classList.remove("day-info--hidden");
	dayInfo.querySelector("#day-info-date").textContent = `${calendarMonthName} ${day}, ${calendarYear}`;

	const eventList = dayInfo.querySelector("#event-list");

	clearEventCards();
	displayEventCards(year, month, day, eventList);
}
