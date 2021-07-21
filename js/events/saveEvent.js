import { arrayEvents,event } from "../controllers/controller.js";

export function saveEvent(title, initialDate,checkEndDate,endDate,checkRemind,remind,description,type){
    
    console.log(title, initialDate,checkEndDate,endDate,checkRemind,remind,description,type);

    event.title = title;
    event.initialDate =  initialDate;
    event.checkEndDate = checkEndDate;
    event.endDate = endDate;
    event.checkRemind = remind;
    event.description = description;
    event.type = type;

    console.log(event);
    arrayEvents.push(event);
    console.log(arrayEvents);
}