import insertCalendarCells from "./views/insertCalendarCells.js";
import setOffsetCalendarCells from "./views/setOffsetCalendarCells.js";
import displayModal from "./views/displayModal.js";

let month = 5;
let year = 2021;

insertCalendarCells(year, month);
setOffsetCalendarCells(year, month);

displayModal();
