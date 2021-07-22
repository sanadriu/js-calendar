import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import updateCalendarEvent from "./events/updateCalendarEvent.js";
import openEvents from "./views/asideEvents.js";

import updateCalendar from "./views/updateCalendar.js";
import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
updateCalendarEvent();

/* Inicialización testing */

sessionStorage.calendarDateISO = new Date().toISOString();

console.log(new Date(sessionStorage.calendarDateISO).getFullYear());
console.log(new Date(sessionStorage.calendarDateISO).getMonth() + 1);

<<<<<<< HEAD
updateCalendar(new Date(sessionStorage.calendarDateISO).getFullYear(), new Date(sessionStorage.calendarDateISO).getMonth() + 1);
=======
openEvents();
updateCalendar(
  new Date(sessionStorage.calendarDateISO).getFullYear(),
  new Date(sessionStorage.calendarDateISO).getMonth() + 1
);
>>>>>>> Local-Storage
