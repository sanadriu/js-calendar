import showModalInfo from './showModalInfo.js';

export default function modalInfoEvent(){
    document.addEventListener("click", (e) => {
        e.stopPropagation();
        if(e.target.matches("[data-event]")){
            showModalInfo(e.target.dataset.event);
        }   
    })
}