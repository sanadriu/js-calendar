import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";
import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";
import infoModalCloseListener from "./events/infoModalCloseListener.js";

import updateCalendar from "./views/updateCalendar.js";
import modalInfoEvent from './events/modalInfoEvent.js';
import removeEventCalendarListener from './events/removeEvent.js';

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
<<<<<<< HEAD
updateCalendarListener();
=======
infoModalCloseListener();
updateCalendarEvent();
modalInfoEvent();
removeEventCalendarListener();
>>>>>>> ed037e5fb621a51ad40bc6041107dc07d32e589a

/* Inicialización testing */
if(!localStorage.getItem('calendarEvents')){
    localStorage.calendarEvents = JSON.stringify([]);
}

const currentDate = new Date();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

<<<<<<< HEAD
updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
=======
let month = sessionStorage.calendarMonth;
let year = sessionStorage.calendarYear;


if(!localStorage.getItem('counter')){
  localStorage.counter = 0;  
}

export let contIds = { cont: parseInt(localStorage.getItem('counter')) };

updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
>>>>>>> ed037e5fb621a51ad40bc6041107dc07d32e589a
