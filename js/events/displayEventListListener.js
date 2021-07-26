import displayEventList from "../view_modifiers/displayEventList.js";

export default function displayEventListListener() {
	document.addEventListener("click", (e) => {
		if (e.target.matches("[data-action~='display-event-list']")) displayEventList(e.target.dataset.day);
	});
}
