let calendar = document.querySelectorAll(".calendar__cell");
let fecha = new Date(2021, 11, 1);
let fechaHoy = new Date();
let numberOfDay = fecha.getDay();
let dayMonth = daysInMonth(fecha.getMonth(), fecha.getFullYear());

function daysInMonth(month, year) {
  //Gives back the nuber of days of a month
  return new Date(year, month, 0).getDate();
}

function fillingDays() {
  if (numberOfDay === 0) {
    //We reassign the value of .getDay() of sundays to 7
    numberOfDay = 7;
  }
  for (let i = 0; i < dayMonth; i++) {
    //We iterate over the calendar array and fill the div with the numbers
    calendar[numberOfDay - 1].insertAdjacentHTML(
      "afterbegin",
      `<span class="day__number">${i + 1}</span>`
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

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function showDate() {
  let nameMonth = monthNames[fecha.getMonth()]; //Gets the month from the date we have and searches the same position in the array
  document.getElementById("month").textContent = nameMonth;
  document.getElementById("year").textContent = fecha.getFullYear(); //This is for the year
}
showDate();

// Function to mark the day of today in blue

function markToday() {
  let numbers = document.getElementsByClassName("day__number"); //select the numbers of the spans made in the fillingDays function
  let today = new Date();
  for (let i in numbers) {
    //Iterate over the numbers
    if (
      today.getMonth() === fecha.getMonth() && //check that the month, year and day of today matches with all those of the given date
      today.getFullYear() === fecha.getFullYear() &&
      numbers[i].innerHTML == today.getDate()
    ) {
      numbers[i].style.backgroundColor = "blue";
      numbers[i].style.color = "white";
      numbers[i].style.borderRadius = "50%";
      numbers[i].style.padding = "2px";
    }
  }
}
markToday();

//TODO Function to compare events and order them depending on time - We need the object first!
