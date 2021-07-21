/*export default function markCurrentDate(year, month) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	if (currentYear === year && currentMonth === month - 1) {
		const callendarCellNumber = document.querySelector(`[data-day='${currentDay}'] > .cell__day-number`);

		callendarCellNumber.classList.add("cell__day-number--today");
	}
}
*/

export default function markCurrentDate(year, month) {
	console.log(year, month);
	console.log(sessionStorage.currentYear, sessionStorage.currentMonth);

	if (sessionStorage.currentYear === year && sessionStorage.currentMonth === month) {
		const callendarCellNumber = document.querySelector(`[data-day='${sessionStorage.currentDay}'] > .cell__day-number`);

		callendarCellNumber.classList.add("cell__day-number--today");
	}
}
