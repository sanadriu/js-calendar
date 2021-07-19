import { template } from "../templates/template_modal.js";

function controllerModal() {
	const gameBoard = document.querySelector("#");

	gameBoard.innerHTML = template;
	gameBoard.querySelector("#").addEventListener("eventName", (event) => {});
}
