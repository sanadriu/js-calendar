function checkReminder(calendarEvent) {
	const currentTimestamp = new Date().getTime();
	const initialTimestamp = new Date(calendarEvent.InitialDate).getTime();
	const reminderTimestamp = initialTimestamp - 60000 * reminderMinutes;

	const reminderMinutes = calendarEvent.reminder;

	if (reminderTimestamp < currentTimestamp && calendarEvent.reminderChk) {
		if (initialTimestamp > currentTimestamp) {
			// notificar
		}

		return false;
	} else {
		return true;
	}
}

setInterval(() => {
	const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

	for (let i = 0; i < calendarEvents.length; i++) {
		const reminderChk = checkReminder(calendarEvents[i]);

		calendarEvents[i] = reminderChk;
	}

	localStorage.setItem("calendarEvents", JSON.stringify(calendarEvents));
}, 10000);
