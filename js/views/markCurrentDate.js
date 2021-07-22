export default function markCurrentDate(year, month) {
	const currentDate = new Date();

	if (currentDate.getFullYear() === year && currentDate.getMonth() + 1 === month) {
		const callendarCellNumber = document.querySelector(`[data-day='${currentDate.getDate()}'] > .cell__day-number`);

		callendarCellNumber.classList.add("cell__day-number--today");
	}
}
