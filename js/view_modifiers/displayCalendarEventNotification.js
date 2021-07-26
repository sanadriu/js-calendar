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
        eventInfo.innerHTML += `<div><strong>${eventsReported[index].title}</strong> <strong>Day: </strong>${array_date[0]}<strong>Hour:</strong> ${array_date[1]}</div>`;
        eventsReported[index].notification = true;
        changeContent = true;
      }
    }
    sessionStorage.setItem("reportedEvents", JSON.stringify(eventsReported));
  }
  if (changeContent) body.appendChild(fragment);
}
