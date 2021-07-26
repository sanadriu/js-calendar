import displayDayInfo from "../view_modifiers/displayDayInfo.js";

export default function displayDayInfoListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='display-day-info']")) {
			sessionStorage.calendarDay = e.target.dataset.day;

			const year = parseInt(sessionStorage.calendarYear);
			const month = parseInt(sessionStorage.calendarMonth);
			const day = parseInt(sessionStorage.calendarDay);

			displayDayInfo(year, month, day);
		}
	});
}
