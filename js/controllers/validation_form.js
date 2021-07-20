let title = document.querySelector("#title");
let initialDate = document.querySelector("#initial_date");
let endDate = document.querySelector("#end_date");
let endDateCheck = document.querySelector("#end_date_chk");
let remingCheck = document.querySelector("#remind_chk");
let time = document.querySelector("#time");
let description = document.querySelector("#desc");
let typeEvent = document.querySelector("#type");

document
  .querySelector("#form__event")
  .addEventListener("submit", validationEventForm);

/*   document
  .querySelector("#title")
  .addEventListener("keydown", validationTitle); */

function validationEventForm(e) {
  e.preventDefault();
  let pattern = /^[A-Za-z]+[0-9]*[)(.-]*$/;

  if (pattern.test(title.value) && title.value.length < 60)
    console.log("title" + true);
  else console.log("title" + false);

  if (description.value.length >= 1 && description.value.length <= 500) {
    if (pattern.test(description.value)) console.log("desc" + true);
    else console.log("desc" + false);
  } else {
    console.log("desc" + true);
  }
}

function startDate() {
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) month = "0" + month;
  if (minutes < 10) month = "0" + month;
  initialDate.value = `${year}-${month}-${day}T${hours}:${minutes}`;
}
startDate();

function finishDate(){
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;
  if (hours < 10) month = "0" + month;
  if (minutes < 10) month = "0" + month;
  endDate.value = `${year}-${month}-${day}T00:${minutes}`;
}
finishDate();

/* function validationTitle(){
    let pattern = /^[A-Za-z]+[0-9]*[)(.-]*$/;
        if (pattern.test(title.value) && title.value.length < 20) console.log(true);
        else console.log(false);
} */
