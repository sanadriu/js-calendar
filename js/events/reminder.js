
export default function checkReminder(calendarEvent) {
  const currentTimestamp = new Date().getTime(); //Fecha Actual
  const initialTimestamp = new Date(calendarEvent.initialDate).getTime(); //Fecha cuando empieza el evento
  const reminderMilliseconds = parseInt(calendarEvent.reminder) * 60000; // minutos a milliseconds
  const reminderTimestamp = new Date(calendarEvent.initialDate).getTime() - reminderMilliseconds; //Cuando salara la notificacion

  let reportedEvents = JSON.parse(sessionStorage.getItem("reportedEvents"));

  if (calendarEvent.reminderChk) {
    if (reminderTimestamp < currentTimestamp) {
      if (initialTimestamp > currentTimestamp) {
        reportedEvents.push({ id: calendarEvent.id, initialDate: calendarEvent.initialDate, title: calendarEvent.title, notification: false });
        sessionStorage.setItem("reportedEvents", JSON.stringify(reportedEvents));
      }
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  }

  //Si la fecha de la notificacion es anterior a la actual
  
  /*
  if (reminderTimestamp < currentTimestamp && calendarEvent.reminderChk) {
    //Fecha cuando empieza el evento tiene que ser posterior a la actual
    if (initialTimestamp > currentTimestamp) {
      //alert(`${calendarEvent.title} a las ${calendarEvent.initialDate}`);
      reportedEvents.push({ id: calendarEvent.id, initialDate: calendarEvent.initialDate, title: calendarEvent.title, notification: false });
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
  }*/
}
