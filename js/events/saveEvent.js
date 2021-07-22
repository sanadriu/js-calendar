import closeModal from '../views/closeModal.js';
import updateCalendar from '../views/updateCalendar.js';
import { contIds } from '../app.js'

export function saveEvent(title, initialDate, checkEndDate, endDate, checkRemind, remind, description, type) {
  const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
  const calendarEvent = {};
/* 
  console.log(calendarEvent); */

  let array_dates = initialDate.split("T");
  let elements_date = array_dates[0].split("-");
  calendarEvent.endDate = {};

  if (endDate !== null) {
    let array_dates2 = endDate.split("T");
    let elements_date2 = array_dates2[0].split("-");

    calendarEvent.endDate.year = elements_date2[0];
    calendarEvent.endDate.month = elements_date2[1];
    calendarEvent.endDate.day = elements_date2[2];
    calendarEvent.endDate.time = array_dates2[1];
  }
  calendarEvent.id = contIds.cont;
  calendarEvent.title = title;

  calendarEvent.initialDate = {};
  calendarEvent.initialDate.year = elements_date[0];
  calendarEvent.initialDate.month = elements_date[1];
  calendarEvent.initialDate.day = elements_date[2];
  calendarEvent.initialDate.time = array_dates[1];

  calendarEvent.checkEndDate = checkEndDate;
  calendarEvent.checkRemind = checkRemind;
  calendarEvent.remind = remind;
  calendarEvent.description = description;
  calendarEvent.type = type;

  calendarEvents.push(calendarEvent);
  localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
  contIds.cont++;
  localStorage.setItem('counter',contIds.cont);
  closeModal();
  updateCalendar(sessionStorage.calendarYear, sessionStorage.calendarMonth);
}