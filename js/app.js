import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";
import infoModalCloseListener from "./events/infoModalCloseListener.js";

import updateCalendar from "./views/updateCalendar.js";
import modalInfoEvent from './events/modalInfoEvent.js';
import removeEventCalendarListener from './events/removeEvent.js';

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
infoModalCloseListener();
updateCalendarEvent();
modalInfoEvent();
removeEventCalendarListener();

/* Inicialización testing */
if(!localStorage.getItem('calendarEvents')){
    localStorage.calendarEvents = JSON.stringify([]);
}

sessionStorage.calendarDateISO = new Date().toISOString();

console.log(new Date(sessionStorage.calendarDateISO).getFullYear());
console.log(new Date(sessionStorage.calendarDateISO).getMonth() + 1);

let month = sessionStorage.calendarMonth;
let year = sessionStorage.calendarYear;


if(!localStorage.getItem('counter')){
  localStorage.counter = 0;  
}

export let contIds = { cont: parseInt(localStorage.getItem('counter')) };

updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
