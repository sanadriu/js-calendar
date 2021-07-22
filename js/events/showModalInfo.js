export default function showModalInfo(idEvent){
    let events = JSON.parse(localStorage.getItem('calendarEvents'));

    for (const e of events) {
        if(e.id === parseInt(idEvent)){
            console.log(e.title,e.initialDate,e.description,e.type);
        }
    }
}