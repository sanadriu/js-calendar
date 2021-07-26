import displayDayInfo from "../view_modifiers/displayDayInfo.js";

export default function displayDayInfoListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='display-day-info']")) {
			const year = parseInt(sessionStorage.calendarYear);
			const month = parseInt(sessionStorage.calendarMonth);
			const day = parseInt(e.target.dataset.day);

			displayDayInfo(year, month, day);
		}
	});
}
