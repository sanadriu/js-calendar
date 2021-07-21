import { createModal } from "../templates/templates.js";

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
	let month = date.getMonth() + 1;
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

	document.querySelector("#form_event").addEventListener("submit", validationEventForm);
	endDateCheck.addEventListener("change", validateCheckEndDate);
	document.querySelector("#time-chk").addEventListener("change", validateCheckRemind);

	/* INICIALIZATE DATES */
	startDate();
	finishDate();

	/*DEFAULT HIDDEN LABEL AND INPUT END DATE*/
	document.querySelector('[for="end-date"]').style.display = "none";
	endDate.style.display = "none";
}
