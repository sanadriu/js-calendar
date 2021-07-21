import displayCalendarEventFormListener from "./events/displayCalendarEventFormListener.js";
import closeCalendarEventFormListener from "./events/closeCalendarEventFormListener.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import updateCalendar from "./views/updateCalendar.js";

displayCalendarEventFormListener();
closeCalendarEventFormListener();
updateCalendarEvent();

/* Inicialización testing */

sessionStorage.calendarDateISO = new Date().toISOString();

console.log(new Date(sessionStorage.calendarDateISO).getFullYear());
console.log(new Date(sessionStorage.calendarDateISO).getMonth());

updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
