import asideEventsDisplayListener from "./events/asideEventsDisplayListener.js";
import calendarEventInfoCloseListener from "./events/calendarEventInfoCloseListener.js";
import calendarEventInfoDisplayListener from "./events/calendarEventInfoDisplayListener.js";
import calendarEventFormCloseListener from "./events/calendarEventFormCloseListener.js";
import calendarEventFormDisplayListener from "./events/calendarEventFormDisplayListener.js";
import calendarEventFormChangeListener from "./events/calendarEventFormChangeListener.js";
import calendarEventFormSubmitListener from "./events/calendarEventFormSubmitListener.js";
import calendarEventRemoveListener from "./events/calendarEventRemoveListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";
import updateCalendar from "./view_modifiers/updateCalendar.js";
import checkReminder from "../js/events/reminder.js";
import calendarEventNotificationCloseListener from "./events/calendarEventNotificationCloseListener.js";
import verifyExpiredEvent from "./events/verifyExpiredEvent.js";
import displayCalendarEventNotification from "./view_modifiers/displayCalendarEventNotification.js";

asideEventsDisplayListener();
calendarEventFormDisplayListener();
calendarEventFormCloseListener();
calendarEventFormChangeListener();
calendarEventFormSubmitListener();
calendarEventInfoCloseListener();
calendarEventInfoDisplayListener();
calendarEventRemoveListener();
updateCalendarListener();
calendarEventNotificationCloseListener();

/* Local and session storage*/
if (!sessionStorage.getItem("reportedEvents")) {
  sessionStorage.setItem("reportedEvents", JSON.stringify([]));
}

if (!localStorage.getItem("calendarEvents")) {
  localStorage.calendarEvents = JSON.stringify([]);
}

const currentDate = new Date();

sessionStorage.calendarYear = currentDate.getFullYear();
sessionStorage.calendarMonth = currentDate.getMonth() + 1;

updateCalendar(parseInt(sessionStorage.calendarYear), parseInt(sessionStorage.calendarMonth));

function refreshNotifications() {
  const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

  for (let i = 0; i < calendarEvents.length; i++) {
    const reminderChk = checkReminder(calendarEvents[i]);

    calendarEvents[i].reminderChk = reminderChk;
	/*Events expired*/
    verifyExpiredEvent(calendarEvents[i]);
  }

  localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
   if (sessionStorage.getItem("reportedEvents").length > 2) {
	  displayCalendarEventNotification(JSON.parse(sessionStorage.getItem("reportedEvents")));
	} 
}

refreshNotifications();

/* Reminder */
setInterval(refreshNotifications, 10000);
