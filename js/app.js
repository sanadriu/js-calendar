import insertCalendarCells from "./views/insertCalendarCells.js";
import setOffsetCalendarCells from "./views/setOffsetCalendarCells.js";
import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";
import markCurrentDate from "./views/markCurrentDate.js";

let month = 7;
let year = 2021;

insertCalendarCells(year, month);
setOffsetCalendarCells(year, month);
markCurrentDate(year, month);

displayModalEvent();
closeModalEvent();
