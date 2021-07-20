import insertCalendarCells from "./views/insertCalendarCells.js";
import setOffsetCalendarCells from "./views/setOffsetCalendarCells.js";
import markCurrentDate from "./views/markCurrentDate.js";
import displayMonth from "./views/displayMonth.js";

import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";

displayModalEvent();
closeModalEvent();

/* Inicialización testing */

const date = new Date();

let month = date.getMonth + 1;
let year = date.getFullYear();

insertCalendarCells(year, month);
setOffsetCalendarCells(year, month);
markCurrentDate(year, month);
displayMonth(year, month);
