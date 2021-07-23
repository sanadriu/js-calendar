function checkReminder(calendarEvent) {
	const currentTimestamp = new Date().getTime();
	const reminderTimestamp = new Date(calendarEvent.InitialDate).getTime() - 60000 * reminderMinutes;

	const reminderMinutes = calendarEvent.reminder;

	if (reminderTimestamp < currentTimestamp && calendarEvent.reminderChk) {
		calendarEvent.reminderChk = false;
		return true;
	} else {
		console.log(reminderTimestamp - currentTimestamp);
		return false;
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
