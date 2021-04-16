/* Initial vars */

let eventForm = document.getElementById("event-form");
let newEventBtn = document.getElementById("new-event-btn");
let quitBtns = document.getElementsByClassName("quit-modal-btn");
let modal = document.querySelector(".modal");
let eventInfoDiv = document.querySelector(".event-info");
let calendarGrid = document.querySelector(".calendar");
let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");

let calendar = loadCalendar();
let currentCalendarIndex = 0;

renderCalendar(calendar, currentCalendarIndex);

/** Event Listeners */

for (let btn of quitBtns) {
  btn.addEventListener("click", (e) => {
    modal.classList.add("hide");
    e.currentTarget.parentElement.classList.add("hide");
  });
}

rightArrow.addEventListener("click", () => {
  currentCalendarIndex += 1;
  renderCalendar(calendar, currentCalendarIndex);
  rightArrow.style.zIndex = calendar.length - currentCalendarIndex - 2;
  leftArrow.style.zIndex = currentCalendarIndex - 1;
});

leftArrow.addEventListener("click", () => {
  currentCalendarIndex -= 1;
  renderCalendar(calendar, currentCalendarIndex);
  rightArrow.style.zIndex = calendar.length - currentCalendarIndex - 2;
  leftArrow.style.zIndex = currentCalendarIndex - 1;
});

document.querySelectorAll('input[type="date"]').forEach((input) => {
  let currentDate = new Date();
  let nextYear = new Date(
    currentDate.getFullYear() + 1,
    currentDate.getMonth()
  );
  input.setAttribute("min", currentDate.toISOString().substring(0, 10));
  input.setAttribute("max", nextYear.toISOString().substring(0, 10));
});

newEventBtn.addEventListener("click", () => {
  resetEventForm();
  modal.classList.remove("hide");
  eventForm.parentElement.classList.remove("hide");
});

eventForm.addEventListener("submit", submitEventForm);

eventForm.querySelector("#cancel-btn").addEventListener("click", () => {
  eventForm.parentElement.classList.add("hide");
  modal.classList.add("hide");
});

eventForm.elements["end-date-check"].addEventListener("change", () => {
  let endLabel = eventForm.querySelector('label[for="end"]');
  endLabel.classList.toggle("hide");
  removeErrorMessage(endLabel);
});

eventForm.elements["reminder-check"].addEventListener("change", () => {
  let reminder = eventForm.querySelector('label[for="reminder-select"]');
  reminder.classList.toggle("hide");
});

modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.add("hide");
    modal
      .querySelectorAll(".modal-content")
      .forEach((content) => content.classList.add("hide"));
  }
});

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) {
    if (!modal.classList.contains("hide")) {
      modal.classList.add("hide");
      modal
        .querySelectorAll(".modal-content")
        .forEach((content) => content.classList.add("hide"));
    }
  }
});

/** FUNCTIONS */

/*
 * LOCAL STORAGE UTILS
 */

function loadCalendar() {
  let item = localStorage.getItem("calendar");
  let newCalendar = createCalendar(12);
  if (item != undefined) {
    let storedCalendar = JSON.parse(item);

    for (let i = 0, j = 0; i < storedCalendar.length; i++) {
      if (
        storedCalendar[i].year == newCalendar[j].year &&
        storedCalendar[i].month == newCalendar[j].month
      ) {
        newCalendar[j] = storedCalendar[i];
        newCalendar[j].days.forEach((day) => {
          day.events.forEach((event) => {
            event.initDate = new Date(event.initDate);
            event.endDate =
              event.endDate == null ? null : new Date(event.endDate);
            if (!event.done && event.endDate != null)
              startReminderInterval(event, event.remind);
          });
        });
        j++;
      }
    }
  }
  return newCalendar;
}

function saveCalendar() {
  localStorage.setItem("calendar", JSON.stringify(calendar));
}

function submitEventForm(e) {
  e.preventDefault();
  let title = eventForm.elements["title"];
  let endDateCheck = eventForm.elements["end-date-check"];
  let reminderCheck = eventForm.elements["reminder-check"];
  let reminder = eventForm.elements["reminder-select"];
  let description = eventForm.elements["description"];
  let type = eventForm.elements["type"];
  let initialLabel = eventForm.querySelector('label[for="initial"]');
  let endLabel = eventForm.querySelector('label[for="end"]');

  let initDate = new Date(
    `${eventForm.elements["initial-date"].value}T${eventForm.elements["initial-time"].value}`
  );
  let endDate = new Date(
    `${eventForm.elements["end-date"].value}T${eventForm.elements["end-time"].value}`
  );

  validateEventTitle(title);
  validateInitDate(initDate, initialLabel);
  if (endDateCheck.checked) validateEndDate(endDate, initDate, endLabel);
  else if (reminderCheck.checked)
    addErrorMessage(
      endLabel,
      "You must indicate the end date if reminder is checked"
    );

  if (!hasErrorMessages(eventForm)) {
    let event = newEvent(
      title.value,
      description.value,
      type.value,
      initDate,
      endDateCheck.checked,
      endDate,
      reminderCheck.checked,
      reminder.value
    );
    addEventToCalendar(event);
    if (!event.done && event.endDate != null)
      startReminderInterval(event, event.remind);
    saveCalendar();
    eventForm.parentElement.classList.add("hide");
    modal.classList.add("hide");
  }
}

function newEvent(
  title,
  description,
  type,
  initDate,
  hasEndDate,
  endDate,
  remind,
  remindTime
) {
  return {
    initDate,
    endDate: !hasEndDate || endDate == "Invalid Date" ? null : endDate,
    title: title.trim(),
    remind,
    remindTime,
    type,
    description: description.trim(),
    done: false,
  };
}

function startReminderInterval(event, remind) {
  event.intervalId = setInterval(() => {
    if (new Date() >= event.endDate) {
      event.done = true;
      let eventDiv = document.querySelector(
        `[data-eventid="${event.initDate.getTime()}"]`
      );
      eventDiv.classList.add("done-event");
      saveCalendar();
      displayEventDoneInfo(event, "Done");
      clearInterval(event.intervalId);
    }
    if (
      remind &&
      event.endDate.getTime() - Date.now() <= event.remindTime * 60000
    ) {
      displayEventDoneInfo(
        event,
        `Less than ${event.remindTime} minutes left!`
      );
      remind = false;
    }
  }, 10000);
}

function displayEventDoneInfo(event, status) {
  let template = document.getElementById("event-info-template");
  let eventInfoDiv = template.content.firstElementChild.cloneNode(true);
  let eventsDone = document.querySelector(".events-done");

  eventInfoDiv.querySelector(".event-status").textContent = status;
  eventInfoDiv.querySelector(".event-title").textContent = event.title;
  eventInfoDiv.querySelector(".event-description").textContent =
    event.description;
  eventInfoDiv.querySelector(
    ".event-initial-date"
  ).textContent = event.initDate.toString();
  eventInfoDiv.querySelector(".event-end-date").textContent =
    event.endDate != null ? event.endDate.toString() : "None";
  eventInfoDiv.querySelector(".event-type").textContent = event.type;
  let li = document.createElement("li");
  li.appendChild(eventInfoDiv);

  if (modal.classList.contains("hide")) {
    eventsDone.innerHTML = "";
    modal.classList.remove("hide");
    eventsDone.parentElement.classList.remove("hide");
    eventForm.parentElement.classList.add("hide");
  }

  eventsDone.appendChild(li);
}

function addEventToCalendar(event) {
  let year = event.initDate.getFullYear();
  let month = event.initDate.getMonth();
  for (let elem of calendar) {
    if (elem.year == year && elem.month == month) {
      let day = elem.days[event.initDate.getDate() - 1];
      day.events.push(event);
      if (elem == calendar[currentCalendarIndex])
        renderEvent(event, day.events);
    }
  }
}

function renderEvent(event, eventsArray) {
  let gridCell = document.querySelector(
    `.grid-cell:nth-child(${event.initDate.getDate()})`
  );
  if (gridCell != undefined) {
    let li = document.createElement("li");
    let eventDiv = createEventDiv(event);
    eventDiv.setAttribute("data-eventid", event.initDate.getTime());
    if (event.done) eventDiv.classList.add("done-event");
    addClickEventListener(eventDiv, event, eventsArray);
    li.appendChild(eventDiv);
    gridCell.querySelector(".events-list").appendChild(li);
  }
}

function renderCalendar(calendar, index) {
  let month = calendar[index];
  let currentDate = new Date();
  calendarGrid.innerHTML = "";
  document.getElementById("month-title").textContent = month.name;

  for (let i = 0; i < month.days.length; i++) {
    let gridCell = createGridCell(month, month.days[i]);
    if (
      month.year == currentDate.getFullYear() &&
      month.month == currentDate.getMonth() &&
      month.days[i].number == currentDate.getDate()
    ) {
      gridCell.classList.add("current-date-cell");
    }
    calendarGrid.appendChild(gridCell);

    for (let event of month.days[i].events)
      renderEvent(event, month.days[i].events);
  }
}

function createGridCell(month, day) {
  let cellTemplate = document.getElementById("grid-cell-template");
  let cell = cellTemplate.content.firstElementChild.cloneNode(true);
  cell.firstElementChild.textContent = day.number;
  cell.style.gridColumnStart = day.weekDay + 1;
  cell.style.gridColumnEnd = day.weekDay + 2;
  addOpenFormListener(cell, month, day);
  return cell;
}

function addOpenFormListener(cell, month, day) {
  cell.querySelector(".plus-btn").addEventListener("click", () => {
    resetEventForm();
    let date = new Date(month.year, month.month, day.number + 1);
    eventForm.elements["initial-date"].value = date
      .toISOString()
      .substring(0, 10);
    modal.classList.remove("hide");
    eventForm.parentElement.classList.remove("hide");
  });
}

function createCalendar(numMonths) {
  let currentDate = new Date();
  let calendar = [];

  for (let i = 0; i < numMonths; i++) {
    let newMonth = {
      year: currentDate.getFullYear(),
      month: currentDate.getMonth(),
      name: currentDate.toLocaleDateString("default", { month: "long" }),
      days: [],
    };

    for (
      let j = 1;
      j <= daysInMonth(currentDate.getMonth(), currentDate.getFullYear());
      j++
    ) {
      newMonth.days.push({
        number: j,
        weekDay: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          j
        ).getDay(),
        events: [],
      });
    }
    calendar.push(newMonth);
    currentDate.setDate(1);
    currentDate.setMonth(currentDate.getMonth() + 1);
  }
  return calendar;
}

function createEventDiv(event) {
  let eventDiv = document.createElement("div");
  let p = document.createElement("p");
  eventDiv.classList.add("event-container");
  p.textContent = event.title;
  eventDiv.appendChild(p);
  return eventDiv;
}

function addClickEventListener(eventDiv, event, eventsArray) {
  eventDiv.addEventListener("click", () => {
    document.getElementById("event-title").textContent = event.title;
    document.getElementById("event-description").textContent =
      event.description;
    document.getElementById(
      "event-initial-date"
    ).textContent = event.initDate.toString();
    document.getElementById("event-end-date").textContent =
      event.endDate != null ? event.endDate.toString() : "None";
    document.getElementById("event-type").textContent = event.type;

    let removeBtn = document.getElementById("remove-event-btn");

    removeBtn.addEventListener("click", () => {
      removeEvent(event, eventsArray);
      eventDiv.parentElement.remove();
      modal.classList.add("hide");
      eventInfoDiv.parentElement.classList.add("hide");
      removeBtn.parentElement.replaceChild(
        removeBtn.cloneNode(true),
        removeBtn
      );
      if (event.remind && !event.done) clearInterval(event.intervalId);
    });

    modal.classList.remove("hide");
    eventInfoDiv.parentElement.classList.remove("hide");
  });
}

function removeEvent(event, eventsArray) {
  for (let i = 0; i < eventsArray.length; i++) {
    if (eventsArray[i].initDate == event.initDate) {
      eventsArray.splice(i, 1);
      break;
    }
  }
  saveCalendar();
}

function daysInMonth(iMonth, iYear) {
  return 32 - new Date(iYear, iMonth, 32).getDate();
}

function resetEventForm() {
  eventForm.querySelector('label[for="end"]').classList.add("hide");
  eventForm.querySelector('label[for="reminder-select"]').classList.add("hide");
  eventForm.reset();
  let invalidInputs = eventForm.querySelectorAll(".invalid-input");
  invalidInputs.forEach(removeErrorMessage);
}

function validateEventTitle(title) {
  if (title.value.trim().length <= 0) addErrorMessage(title, "Title Required!");
  else removeErrorMessage(title);
}

function validateInitDate(date, label) {
  if (date == "Invalid Date") addErrorMessage(label, "Initial Date Required!");
  else if (date < new Date()) addErrorMessage(label, "Date Range Error!");
  else removeErrorMessage(label);
}

function validateEndDate(date, initDate, label) {
  if (date == "Invalid Date") addErrorMessage(label, "End Date Required!");
  else if (date <= new Date() || date <= initDate)
    addErrorMessage(label, "Date Range Error!");
  else removeErrorMessage(label);
}

function hasErrorMessages(form) {
  return form.getElementsByClassName("invalid-input").length > 0;
}

function hasErrorMessage(input) {
  return input.classList.contains("invalid-input");
}

function removeErrorMessage(input) {
  if (hasErrorMessage(input)) {
    input.classList.remove("invalid-input");
    input.nextElementSibling.remove();
  }
}

function addErrorMessage(input, message) {
  if (hasErrorMessage(input)) {
    input.nextElementSibling.firstElementChild.textContent = message;
  } else {
    input.classList.add("invalid-input");
    let errorDiv = createErrorMessageDiv(message);
    input.insertAdjacentElement("afterend", errorDiv);
  }
}

function createErrorMessageDiv(message) {
  let newDiv = document.createElement("div");
  let newP = document.createElement("p");
  newDiv.className = "error-message";
  newP.textContent = message;
  newDiv.appendChild(newP);
  return newDiv;
}
