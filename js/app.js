import changeFormStylesListener from "./events/changeFormStylesListener.js";
import closeDayInfoListener from "./events/closeDayInfoListener.js";
import closeEventFormListener from "./events/closeEventFormListener.js";
import closeEventInfoListener from "./events/closeEventInfoListener.js";
import displayDayInfoListener from "./events/displayDayInfoListener.js";
import displayEventFormListener from "./events/displayEventFormListener.js";
import displayEventInfoListener from "./events/displayEventInfoListener.js";
import filterEventsByTypeListener from "./events/filterEventsByTypeListener.js";
import init from "./events/init.js";
import inputEventFormListener from "./events/inputEventFormListener.js";
import removeCalendarEventListener from "./events/removeCalendarEventListener.js";
import saveCalendarEventListener from "./events/saveCalendarEventListener.js";
import updateCalendarListener from "./events/updateCalendarListener.js";

changeFormStylesListener();
closeDayInfoListener();
closeEventFormListener();
closeEventInfoListener();
displayDayInfoListener();
displayEventFormListener();
displayEventInfoListener();
filterEventsByTypeListener();
init();
inputEventFormListener();
removeCalendarEventListener();
saveCalendarEventListener();
updateCalendarListener();

import checkReminder from "../js/events/reminder.js";
import calendarEventNotificationCloseListener from "./events/calendarEventNotificationCloseListener.js";
import verifyExpiredEvent from "./events/verifyExpiredEvent.js";
import displayCalendarEventNotification from "./view_modifiers/displayCalendarEventNotification.js";

calendarEventNotificationCloseListener();

/* Local and session storage*/
if (!sessionStorage.getItem("reportedEvents")) {
  sessionStorage.setItem("reportedEvents", JSON.stringify([]));
}

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


