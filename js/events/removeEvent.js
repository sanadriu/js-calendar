import { displayCalendarEventTags } from "./displayCalendarEventTags.js";
import updateCalendar from "../view_modifiers/updateCalendar.js";

export default function removeEventCalendarListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action='remove-event']")) {
			let id = document.querySelector("#id-event").textContent;
			let events_json = JSON.parse(localStorage.getItem("calendarEvents"));

			events_json.forEach((event) => {
				if (event.id == id) {
					let pos = events_json.indexOf(event);
					events_json.splice(pos, 1);
				}
			});
			localStorage.setItem("calendarEvents", JSON.stringify(events_json));

			const modal = document.querySelector("#modal-event-info");
			modal.remove();
			updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
			//displayCalendarEventTags(localStorage.getItem('calendarEvents'), new Date(sessionStorage.calendarDateISO).getMonth() + 1, new Date(sessionStorage.calendarDateISO).getFullYear())
		}
	});
}
