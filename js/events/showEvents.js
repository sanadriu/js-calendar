import { contIds } from '../app.js'

export function showEventsCalendar(calendarEvents, month, year) {
  let json = JSON.parse(calendarEvents);
  json.sort(orderArrayEvents);

  if (month < 10) month = "0" + month;
    let cont = 0;
  for (const object of json) {
    if (object.initialDate.year === year && object.initialDate.month === month) {
      iterateDays(object,cont);
    }
    cont++;
  }
}

function orderArrayEvents(a, b) {
  if (a.initialDate.time < b.initialDate.time) {
    return -1;
  }
  if (b.initialDate.time > a.initialDate.time) {
    return 1;
  }
  return 0;
}

function iterateDays(event,cont) {
  let div_days = document.querySelectorAll("[data-day]");

  for (let index = 0; index < div_days.length; index++) {
    if (div_days[index].dataset.day === event.initialDate.day) {
      let div = document.createElement("div");
      switch (event.type) {
        case "Meeting":
          div.className = "day__event day__event-red";
          break;
        case "Task":
          div.className = "day__event day__event-green";
          break;
        case "Personal":
          div.className = "day__event day__event-orange";
          break;
        case "Study":
          div.className = "day__event day__event-blue";
          break;
        default:
          break;
      }
      div.dataset.event = event.id;
      div.innerHTML = `<strong>${event.initialDate.time}</strong> ${event.title}`;
      div_days[index].appendChild(div);
    }
  }
}
