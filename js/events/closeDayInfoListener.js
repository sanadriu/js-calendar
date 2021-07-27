import closeDayInfo from "../view_modifiers/closeDayInfo.js";

export default function closeDayInfoListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action='close-day-info']")) {
			closeDayInfo();

			sessionStorage.calendarDay = null;
		}
	});
}
