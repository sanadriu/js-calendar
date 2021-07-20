import insertCalendarCells from "./views/insertCalendarCells.js";
import setOffsetCalendarCells from "./views/setOffsetCalendarCells.js";
import displayModalEvent from "./events/displayModalEvent.js";
import closeModalEvent from "./events/closeModalEvent.js";

let month = 7;
let year = 2021;

insertCalendarCells(year, month);
setOffsetCalendarCells(year, month);

let divsDays  = document.querySelectorAll('.calendar__cell.calendar__cell--day');

/* divsDays.forEach(element => {
	console.log(element);
	element.addEventListener('click',displayModal);
});

 */
displayModalEvent();
closeModalEvent();
