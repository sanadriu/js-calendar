export default function markCurrentDate(year, month) {
	if (sessionStorage.currentYear === year && sessionStorage.currentMonth === month) {
		const callendarCellNumber = document.querySelector(`[data-day='${sessionStorage.currentDay}'] > .cell__day-number`);

		callendarCellNumber.classList.add("cell__day-number--today");
	}
}
