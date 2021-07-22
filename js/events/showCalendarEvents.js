import modalInfoEvent from "./modalInfoEvent.js";

export function showCalendarEvents(month, year) {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
	calendarEvents.sort(sortCalendarEvents);
	calendarEvents.filter();

	let cont = 0;
	for (const object of json) {
		if (parseInt(object.initialDate.year) === year && parseInt(object.initialDate.month) === month) {
			iterateDays(object, cont);
		}
		cont++;
	}

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

function filterCalendarEvent(event) {}

function iterateDays(event, cont) {
	let eventTags = document.querySelectorAll("[data-day]");

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
