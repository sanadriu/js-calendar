import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import updateCalendar from "./views/updateCalendar.js";

displayModalEvent();
closeModalEvent();
updateCalendarEvent();

/* Inicialización testing */

sessionStorage.calendarDateISO = new Date().toISOString();

console.log(new Date(sessionStorage.calendarDateISO).getFullYear());
console.log(new Date(sessionStorage.calendarDateISO).getMonth());

updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
