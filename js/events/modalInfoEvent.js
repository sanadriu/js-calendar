import showModalInfo from './showModalInfo.js';

export default function modalInfoEvent(){
    const eventBoxes = document.querySelectorAll("[data-event]");

    eventBoxes.forEach(eventBox => {
        eventBox.addEventListener("click", (e) => {            
            showModalInfo(eventBox.dataset.event);
        })
    })
    
}