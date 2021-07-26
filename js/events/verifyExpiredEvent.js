import displayCalendarEventInfo from "../view_modifiers/displayCalendarEventInfo.js";

export default function verifyExpiredEvent(eventCalendar){
    let currentTimestamp = new Date().getTime();
    let initialTimestamp = new Date(eventCalendar.initialDate).getTime();
    let date = new Date()
    date.setHours(date.getHours()+2);

    if (currentTimestamp >= initialTimestamp) {
        let events = document.querySelectorAll(".event-tag");
        events.forEach((event) => {
          if (parseInt(event.getAttribute("data-event")) === eventCalendar.id ) {
             if (!event.classList.contains("bg-grey") && eventCalendar.initialDate == date.toISOString().substring(0, 16)) {
              displayCalendarEventInfo(eventCalendar.id);
            } 
            event.classList.add("bg-grey");
          }
        });
      }
      
}