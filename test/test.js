let calendar = document.querySelectorAll(".calendar__cell");
let fecha = new Date(2021, 3, 1);
let fechaHoy = new Date();
let numberOfDay = fecha.getDay();
let dayMonth = daysInMonth(fecha.getMonth(), fecha.getFullYear());

function daysInMonth(month, year) {
  //Gives back the nuber of days of a month
  return new Date(year, month, 0).getDate();
}

function fillingDays() {
  let today = fechaHoy.getDate(); //Gives back the number of the day of today
  if (numberOfDay === 0) {
    //We reassign the value of .getDay() of sundays to 7
    numberOfDay = 7;
  }
  for (let i = 0; i < dayMonth; i++) {
    //We iterate over the calendar array and fill the div with the numbers
    calendar[numberOfDay - 1].insertAdjacentHTML(
      "afterbegin",
      `<span>${i + 1}</span>`
    );
    numberOfDay++;
    if (numberOfDay > calendar.length) {
      //Stop the iteration when the number of days is bigger than the number of divs
      break;
    }
    if ((fechaHoy = i + 1)) {
    }
  }
  clearEmptyDays();
}
fillingDays();

function clearEmptyDays() {
  calendar.forEach((element, i) => {
    if (!element.hasChildNodes()) {
      //Search the empty divs
      if (i >= 0 && i <= 7) {
        element.style.border = "none"; //Remove the border of the upper ones
      } else {
        element.remove(); //Remove the lower ones
      }
    }
  });
}

//Necesitamos una función de ranking que se base en la hora de cada evento (id="span-hour")
