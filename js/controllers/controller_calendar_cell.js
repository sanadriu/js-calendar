import { template } from "../templates/template_calendar.js";

function controllerCalendarCell() {
	const gameBoard = document.querySelector("#");

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#").addEventListener("eventName", (event) => {});
}
