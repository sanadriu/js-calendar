export default function clearCalendarCells() {
  const calendarCells = document.querySelectorAll("calendar__cell--day");

  calendarCells.forEach((calendarCell) => {
    calendarCell.remove();
  });
}
