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
/* 
  console.log(calendarEvents); */
  calendarEvents.push(calendarEvent);
/*   calendarEvents.sort(orderArrayEvents); */
  localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
}

function orderArrayEvents(a, b) {
  if (a.initialDate < b.initialDate) {
    return -1;
  }
  if (b.initialDate > a.initialDate) {
    return 1;
  }
  return 0;
}
