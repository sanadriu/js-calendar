import displayMonth from "../views/displayMonth.js";
import modalInfoEvent from "./modalInfoEvent.js";

export function showCalendarEvents(month, year) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	calendarEvents.sort(sortCalendarEvents).filter(filterCalendarEvents).forEach(displayEventTags);

	modalInfoEvent();
}

function sortCalendarEvents(event01, event02) {
	if (event01.initialDate.time < event02.initialDate.time) {
		return -1;
	}
	if (event01.initialDate.time > event02.initialDate.time) {
		return 1;
	}

	return 0;
}

function filterCalendarEvents(event) {
	return parseInt(event.initialDate.year) === year && parseInt(event.initialDate.month) === month;
}

function displayEventTag(event) {
	const eventTag = document.querySelector(`[data-day='${event.initialDate.day}']`);

	for (let index = 0; index < div_days.length; index++) {
		if (div_days[index].dataset.day === event.initialDate.day) {
			let div = document.createElement("div");
			switch (event.type) {
				case "Meeting":
					div.className = "day__event day__event-red";
					break;
				case "Task":
					div.className = "day__event day__event-green";
					break;
				case "Personal":
					div.className = "day__event day__event-orange";
					break;
				case "Study":
					div.className = "day__event day__event-blue";
					break;
				default:
					break;
			}
			div.dataset.event = event.id;
			div.innerHTML = `<b>${event.initialDate.time}</b> ${event.title}`;
			div_days[index].appendChild(div);
		}
	}
}
