import { template } from "../templates/template_calendar_cell.js";

function controllerCalendarCell() {
	const gameBoard = document.querySelector("#");

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#").addEventListener("eventName", (event) => {});
}
