function getDaysInMonth(yearNum, monthNum) {
	return new Date(yearNum, monthNum - 1, 0).getDate();
}

function getFirstDayOfMonth(yearNum, monthNum) {
	return new Date(yearNum, monthNum - 1, 1);
}

function modifyCalendarCells(yearNum, monthNum) {
	const calendarCells = document.querySelectorAll(".calendar__cell--day");

	const monthNumOfDays = getDaysInMonth(yearNum, monthNum);
	const firstDayOfMonth = getFirstDayOfMonth(yearNum, monthNum).getDay();

	console.log(firstDayOfMonth);
	if (firstDayOfMonth === 0) {
		calendarCells[0].style.gridColumn = 7;
	} else {
		calendarCells[0].style.gridColumn = firstDayOfMonth;
	}

	for (let i = 1; i < monthNumOfDays; i++) {
		calendarCells[i].textContent = i + 1;
		calendarCells[i].classList.remove("calendar__cell--disabled");
	}
}

function clearCalendarCells() {
	const calendarCells = document.querySelectorAll(".calendar__cell--day");
	calendarCells.forEach((calendarCell) => {
		calendarCell.innerHTML = null;
		calendarCell.classList.add("calendar__cell--disabled");
	});
}

function updateCalendarCells(yearNum, monthNum) {
	const calendarCells = document.querySelectorAll(".calendar__cell--day");

	const monthNumOfDays = getDaysInMonth(yearNum, monthNum);
	const firstDayOfMonth = getFirstDayOfMonth(yearNum, monthNum).getDay();

	console.log(firstDayOfMonth);
	if (firstDayOfMonth === 0) {
		calendarCells[0].style.gridColumn = 7;
	} else {
		calendarCells[0].style.gridColumn = firstDayOfMonth;
	}

	for (let i = 1; i < monthNumOfDays; i++) {
		calendarCells[i].textContent = i + 1;
		calendarCells[i].classList.remove("calendar__cell--disabled");
	}
}

clearCalendarCells();
modifyCalendarCells(2021, 6);

document.addEventListener("click", (e) => {
	if (e.target.matches("[data-date='every_date']")) {
		showModal();
	}
});
