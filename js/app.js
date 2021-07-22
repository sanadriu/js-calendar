import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";
import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";
import infoModalCloseListener from "./events/infoModalCloseListener.js";

import updateCalendar from "./views/updateCalendar.js";
import calendarEventInfoDisplayListener from "./events/calendarEventInfoDisplayListener.js";
import removeEventCalendarListener from "./events/removeEvent.js";

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
updateCalendarListener();

// Alberto
infoModalCloseListener();
calendarEventInfoDisplayListener();
removeEventCalendarListener();

/* Inicialización testing */
if (!localStorage.getItem("calendarEvents")) {
	localStorage.calendarEvents = JSON.stringify([]);
}

const currentDate = new Date();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);

if (!localStorage.getItem("counter")) {
	localStorage.counter = 0;
}

export let contIds = { cont: parseInt(localStorage.getItem("counter")) };
