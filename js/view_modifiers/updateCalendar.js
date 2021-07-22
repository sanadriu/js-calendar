import clearCalendarCells from "./clearCalendarCells.js";
import insertCalendarCells from "./insertCalendarCells.js";
import setOffsetCalendarCells from "./setOffsetCalendarCells.js";
import markCurrentDate from "./markCurrentDate.js";
import displayMonth from "./displayMonth.js";
import displayCalendarEventTags from "./displayCalendarEventTags.js";

export default function updateCalendar(year, month) {
	clearCalendarCells();
	insertCalendarCells(year, month);
	setOffsetCalendarCells(year, month);
	markCurrentDate(year, month);
	displayMonth(year, month);
	displayCalendarEventTags(year, month);
}
