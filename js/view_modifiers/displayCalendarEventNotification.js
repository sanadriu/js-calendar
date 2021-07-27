import { createEventNotification } from "../templates/templates.js";

export default function displayCalendarEventNotification(eventsReported) {
  const body = document.querySelector("body");
  const fragment = createEventNotification();
  const eventInfo = fragment.querySelector(".event-notification__section");
  let changeContent = false;
  if (eventsReported != null) {
    for (let index = 0; index < eventsReported.length; index++) {
      if (!eventsReported[index].notification) {
        let array_date = eventsReported[index].initialDate.split("T");
        eventInfo.innerHTML += `
        <div class="p-1">
        <strong>${eventsReported[index].title} </strong><br>
        <span class="material-icons">event</span> ${array_date[0]}
        <span class="material-icons">schedule</span> ${array_date[1]}
        </div>`;
        eventsReported[index].notification = true;
        changeContent = true;
      }
    }
    sessionStorage.setItem("reportedEvents", JSON.stringify(eventsReported));
  }
  if (changeContent) body.appendChild(fragment);
}
