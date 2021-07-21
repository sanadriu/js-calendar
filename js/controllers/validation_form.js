/* VALIDATION FORM */
let pattern = /^[A-Za-z]+[0-9]*[)(.-]*$/;

function validationEventForm(e) {
  e.preventDefault();
  let correctEndDate;
  let initialDate = document.querySelector("#initial-date");
  let endDate = document.querySelector("#end-date");
  let correctTitle = validateTitle();
  let correctDescription = validateDescription();
  let correctInitialDate = validateInitialDate(initialDate, "initial");
  let checkEndDate = document.querySelector('[name="end_date_chk"]').checked;

  //It's checked
  if (checkEndDate) {
    correctEndDate = validateFinishDate(endDate, "end", initialDate);
  } else {
    correctEndDate = true;
  }
  if (
    correctTitle &&
    correctDescription &&
    correctInitialDate &&
    correctEndDate
  ) {
    let title = document.querySelector('[name="title"]').value;
    let initialDate = document.querySelector('[name="initial_date"]').value;
    let checkEndDate = document.querySelector('[name="end_date_chk"]').checked;
    let checkRemind = document.querySelector('[name="time_chk"]').checked;
    let remind = document.querySelector('[name="remind"]').value;
    let description = document.querySelector('[name="desc"]').value;
    let type = document.querySelector('[name="type"]').value;
    console.log(
      title,
      initialDate,
      checkEndDate,
      (checkEndDate) ? endDate.value : null,
      checkRemind,
      (checkRemind) ? remind :  null,
      description,
      type
    );
  }
}

function validateInitialDate(date, error) {
  let now = new Date();
  let month = now.getMonth() + 1;

  let errorDate = document.querySelector(`[data-warning="${error}-date"]`);
  let year = parseInt(date.value.substring(0, 4));

  //Para sacar la fecha actual (sin segundos) y poner el formato correcto para comparar las dos fechas
  let stringNow = `${now.getFullYear()}-${month < 10 ? "0" + month : month}-${
    now.getDate() < 10 ? "0" + now.getDate() : now.getDate()
  }`;

  if (
    (year === 2021 || year === 2022) &&
    new Date(stringNow) <= new Date(date.value)
  ) {
    errorDate.classList.add("is-hidden");
    return true;
  } else {
    errorDate.classList.remove("is-hidden");
    return false;
  }
}

function validateFinishDate(endDate, error, initialDate) {
  let errorDate = document.querySelector(`[data-warning="${error}-date"]`);
  let year = parseInt(endDate.value.substring(0, 4));

  if ( (year === 2021 || year === 2022) && (new Date(endDate.value) >= new Date(initialDate.value))) {
    errorDate.classList.add("is-hidden");
    return true;
  } else {
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
    endDate.disabled = false;
  } else {
    document.querySelector('[for="end-date"]').style.display = "none";
    endDate.style.display = "none";
    endDate.disabled = true;
  }
}

function validateCheckRemind() {
  let checkRemind = document.querySelector("#time-chk");
  let endRemind = document.querySelector("#remind");

  if (checkRemind.checked) {
    document.querySelector('[for="remind"]').style.display = "block";
    endRemind.style.display = "block";
    endRemind.disabled = false;
  } else {
    document.querySelector('[for="remind"]').style.display = "none";
    endRemind.style.display = "none";
    endRemind.disabled = true;
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
