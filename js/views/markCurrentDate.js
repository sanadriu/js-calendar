export default function markCurrentDate(year, month) {
	const currentDate = new Date();
	const currentYear = currentDate.getFullYear();
	const currentMonth = currentDate.getMonth();
	const currentDay = currentDate.getDate();

	if (currentYear === year && currentMonth === month - 1) {
		const callendarCellNumber = document.querySelector(`[data-day='${currentDay}'] > .cell__day-number`);

		callendarCellNumber.classList.add("cell__day-number--today");
	}
}
