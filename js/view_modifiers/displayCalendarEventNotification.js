import { createEventNotification, createNotificationCard } from "../templates/templates.js";

export default function displayCalendarEventNotification(eventsReported) {
  const body = document.querySelector("body");
  const fragment = createEventNotification();
  const eventInfo = fragment.querySelector(".event-notification__section");
  let changeContent = false;

  if (eventsReported != null) {
    for (let index = 0; index < eventsReported.length; index++) {
      if (!eventsReported[index].notification) {
        let array_date = eventsReported[index].initialDate.split("T");

        const cardFragment = createNotificationCard();
        const card = cardFragment.querySelector(".notification-card")
        
        card.children[0].textContent = eventsReported[index].title;
        card.children[1].children[1].textContent = array_date[0];
        card.children[2].children[1].textContent = array_date[1];

        eventInfo.appendChild(cardFragment);

        eventsReported[index].notification = true;
        changeContent = true;
      }
    }
    sessionStorage.setItem("reportedEvents", JSON.stringify(eventsReported));
  }
  if (changeContent) body.appendChild(fragment);
}
