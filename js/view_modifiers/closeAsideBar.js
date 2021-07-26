export default function closeAsideBar() {
  const asideEventsElement = document.querySelector("#calendar-aside-events");
  asideEventsElement.classList.add("calendar__aside-events--hidden");
}
