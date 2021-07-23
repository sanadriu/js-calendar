import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";
import calendarEventInfoCloseListener from "./events/calendarEventInfoCloseListener.js";
import calendarEventInfoDisplayListener from "./events/calendarEventInfoDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormChangeListener from "./events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "./events/calendarEventFormSubmitListener.js";
import calendarEventRemoveListener from "./events/calendarEventRemoveListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";
import changeFormStyles from "./view_modifiers/changeFormStyles.js";

import updateCalendar from "./view_modifiers/updateCalendar.js";

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
calendarEventFormChangeListener();
calendarEventFormSubmitListener();
calendarEventInfoCloseListener();
calendarEventInfoDisplayListener();
calendarEventRemoveListener();
updateCalendarListener();
changeFormStyles();

/* Inicialización testing */

if (!localStorage.getItem("calendarEvents")) {
  localStorage.calendarEvents = JSON.stringify([]);
}

const currentDate = new Date();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

updateCalendar(
  parseInt(sessionStorage.calendarYear),
  parseInt(sessionStorage.calendarMonth)
);
