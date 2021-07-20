import { createModal } from "../templates/templates.js";
/* VALIDATION FORM */
let pattern = /^[A-Za-z]+[0-9]*[)(.-]*$/;

function validationEventForm(e) {
  e.preventDefault();
  let initialDate = document.querySelector("#initial-date");
  let endDate = document.querySelector("#end-date");
  let correctTitle = validateTitle();
  let correctDescription = validateDescription();
  let correctInitialDate = validateDate(initialDate,'initial');
  let correctEndDate = validateDate(endDate,'end');
  if (correctTitle && correctDescription && correctInitialDate && correctEndDate) {
	let title = document.querySelector('[name="title"]').value;
	let initialDate = document.querySelector('[name="initial_date"]').value;
	let checkEndDate = document.querySelector('[name="end_date_chk"]').checked;
	let endDate = document.querySelector('[name="end_date"]').value;
	let checkRemind = document.querySelector('[name="time_chk"]').checked;
	let remind = document.querySelector('[name="remind"]').value;
	let description = document.querySelector('[name="desc"]').value;
	let type = document.querySelector('[name="type"]').value;
	console.log(title,initialDate,checkEndDate,endDate,checkRemind,remind,description,type);
  }
}

function validateDate(date,error){
	let errorDate = document.querySelector(`[data-warning="${error}-date"]`);
	let year = parseInt(date.value.substring(0,4));
	if(year ===  2021 || year === 2022){
		errorDate.classList.add("is-hidden");
		return true;
	}else{
		errorDate.classList.remove("is-hidden");
		return false;
	}
}

function validateTitle() {
  let title = document.querySelector("#title");
  let errorTitle = document.querySelector('[data-warning="title"]');
  if (pattern.test(title.value) && title.value.length < 60) {
    errorTitle.classList.add("is-hidden");
    return true;
  } else {
    errorTitle.classList.remove("is-hidden");
    return false;
  }
}

function validateDescription() {
  let description = document.querySelector("#desc");
  let errorDescription = document.querySelector('[data-warning="description"]');
  if (description.value.length >= 1 && description.value.length <= 500) {
    if (pattern.test(description.value)) {
      errorDescription.classList.add("is-hidden");
      return true;
    } else {
      errorDescription.classList.remove("is-hidden");
      return false;
    }
  } else {
    errorDescription.classList.add("is-hidden");
    return true;
  }
}

function validateCheckEndDate() {
  let endDate = document.querySelector("#end-date");
  let endDateCheck = document.querySelector("#end-date-chk");

  if (endDateCheck.checked) {
    document.querySelector('[for="end-date"]').style.display = "block";
    endDate.style.display = "block";
  } else {
    document.querySelector('[for="end-date"]').style.display = "none";
    endDate.style.display = "none";
  }
}

/* FIN VALIDATION FORM*/

function startDate() {
  let initialDate = document.querySelector("#initial-date");
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  initialDate.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}

function finishDate() {
  let endDate = document.querySelector("#end-date");
  let date = new Date();
  let month = date.getMonth();
  let day = date.getDate() + 1;
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  endDate.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}


export default function displayModal() {
  const body = document.querySelector("body");
  const modal = createModal();

  body.appendChild(modal);

  let endDate = document.querySelector("#end-date");
  let endDateCheck = document.querySelector("#end-date-chk");

  document
    .querySelector("#form_event")
    .addEventListener("submit", validationEventForm);
  endDateCheck.addEventListener("change", validateCheckEndDate);

  /* INICIALIZATE DATES */
  startDate();
  finishDate();

  /*DEFAULT HIDDEN LABEL AND INPUT END DATE*/
  document.querySelector('[for="end-date"]').style.display = "none";
  endDate.style.display = "none";
}

