/* Variables */
let title = document.querySelector("#title");
let initialDate = document.querySelector("#initial-date");
let endDate = document.querySelector("#end-date");
let endDateCheck = document.querySelector("#end-date-chk");
let remindCheck = document.querySelector("#remind-chk");
let time = document.querySelector("#time");
let description = document.querySelector("#desc");
let typeEvent = document.querySelector("#type");

/* Events */

/*
document
  .querySelector("#form_event")
  .addEventListener("submit", validationEventForm);

endDateCheck.addEventListener("change", validateCheckEndDate);

function validationEventForm(e) {
  e.preventDefault();
  let pattern = /^[A-Za-z]+[0-9]*[)(.-]*$/;
   let errorTitle = document.querySelector('[data-warning="title"]');
   console.log(errorTitle);
  if (pattern.test(title.value) && title.value.length < 60)
    errorTitle.classList.remove('is-hidden');
  else errorTitle.classList.add('is-hidden');

  if (description.value.length >= 1 && description.value.length <= 500) {
    if (pattern.test(description.value)) console.log("desc" + true);
    else console.log("desc" + false);
  } else {
    console.log("desc" + true);
  }
}

*/
/* 
function startDate() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) month = "0" + hours;
  if (minutes < 10) month = "0" + minutes;
  initialDate.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}
startDate();

function finishDate() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) month = "0" + hours;
  if (minutes < 10) month = "0" + minutes;
  endDate.value = `${year}-${month}-${day}T00:${minutes}`;
}
finishDate(); */
/* function validateCheckEndDate() {
  if (endDateCheck.checked) {
    document.querySelector('[for="end-date"]').style.display = "block";
    endDate.style.display = "block";     
  } else {
    document.querySelector('[for="end-date"]').style.display = "none";
    endDate.style.display = "none";     
  }
}

document.querySelector('[for="end-date"]').style.display = "none";
endDate.style.display = "none";
 */