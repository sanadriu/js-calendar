import getMonthName from "../helpers/getMonthName.js";

export default function displayAsideEvents(day) {
	//Makes the aside visible and activates the flex
	const asideEventsElement = document.querySelector("#calendar-aside-events");

	const asideDateElement = asideEventsElement.querySelector("#calendar-aside-date");
	const asideHintElement = asideEventsElement.querySelector("#calendar-aside-hint");

	asideEventsElement.classList.remove("calendar__aside-events--hidden");

	//Prints day, week and month on the top of the aside

	const calendarYear = new Date(sessionStorage.calendarDateISO).getFullYear();
	const calendarMonth = getMonthName(new Date(sessionStorage.calendarDateISO).getMonth() + 1);

	asideDateElement.textContent = `${calendarMonth} ${day}, ${calendarYear}`;

	//Gives a hint to create new events
	console.log(asideEventsElement.children);
	console.log(asideEventsElement.children.length);

	if (asideEventsElement.children.length < 3) {
		asideHintElement.classList.remove("no-display");
	} else {
		asideHintElement.classList.add("no-display");
	}
}
