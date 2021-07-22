import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import updateCalendar from "./views/updateCalendar.js";

displayModalEvent();
closeModalEvent();
updateCalendarEvent();
/* Inicialización testing */
if(!localStorage.getItem('calendarEvents')){
    localStorage.calendarEvents = JSON.stringify([]);
}

const currentDate = new Date();

sessionStorage.currentYear = currentDate.getFullYear();
sessionStorage.currentMonth = currentDate.getMonth() + 1;
sessionStorage.currentDay = currentDate.getDate();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

let month = sessionStorage.calendarMonth;
let year = sessionStorage.calendarYear


updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
