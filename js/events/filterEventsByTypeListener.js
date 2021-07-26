import filterEventsByType from "../view_modifiers/filterEventsByType.js";

export default function filterEventsByTypeListener() {
	document.addEventListener("change", (e) => {
		if (e.target.matches("[data-action~='filter-event-tags']")) {
			const type = e.target.dataset.type;
			const filter = !e.target.checked;
			filterEventsByType(type, filter);
		}
	});
}
