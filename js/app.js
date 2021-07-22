import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";
import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";

import updateCalendar from "./views/updateCalendar.js";

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
updateCalendarListener();

/* Inicialización testing */

const currentDate = new Date();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
