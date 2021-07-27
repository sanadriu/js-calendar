export default function clearEventTags(year, month, day) {
	if (year === parseInt(sessionStorage.calendarYear) && month === parseInt(sessionStorage.calendarMonth)) {
		document
			.querySelector(`.calendar__cell--day[data-day='${day}']`)
			.querySelectorAll(".event-tag")
			.forEach((eventTag) => {
				eventTag.remove();
			});
	}
}
