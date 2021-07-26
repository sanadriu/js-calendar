export default function checkReminder(calendarEvent) {
	const currentTimestamp = new Date().getTime(); //Fecha Actual
	const initialTimestamp = new Date(calendarEvent.initialDate).getTime(); //Fecha cuando empieza el evento
	const reminderMilliseconds = parseInt(calendarEvent.reminder) * 60000; // minutos a milliseconds
	const reminderTimestamp = new Date(calendarEvent.initialDate).getTime() - reminderMilliseconds; //Cuando salara la notificacion
	console.log(new Date(new Date(calendarEvent.initialDate) - reminderMilliseconds), new Date());
	if (!sessionStorage.getItem("reportedEvents")) {
		sessionStorage.setItem("reportedEvents", JSON.stringify([]));
	}
	let reportedEvents = JSON.parse(sessionStorage.getItem("reportedEvents"));
	//Si la fecha de la notificacion es anterior a la actual
	if (reminderTimestamp < currentTimestamp && calendarEvent.reminderChk) {
		//Fecha cuando empieza el evento tiene que ser posterior a la actual
		if (initialTimestamp > currentTimestamp) {
			alert(`${calendarEvent.title} a las ${calendarEvent.initialDate}`);
			reportedEvents.push({ id: calendarEvent.id });
			sessionStorage.setItem("reportedEvents", JSON.stringify(reportedEvents));
		}
		return false;
	} else {
		let found = false;
		//Si lo encuentra devolvera false en el recordatorio para que no salte de nuevo
		reportedEvents.forEach((event) => {
			if (event.id === calendarEvent.id) {
				found = true;
			}
		});
		if (found) return false;
		else return true;
	}
}
