import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";
import openEvents from "./views/asideEvents.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import updateCalendar from "./views/updateCalendar.js";

displayModalEvent();
closeModalEvent();
updateCalendarEvent();

/* Inicialización testing */

const currentDate = new Date();

sessionStorage.currentYear = currentDate.getFullYear();
sessionStorage.currentMonth = currentDate.getMonth() + 1;
sessionStorage.currentDay = currentDate.getDate();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
openEvents();
