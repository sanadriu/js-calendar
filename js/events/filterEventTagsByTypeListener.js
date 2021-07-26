import filterEventTagsByType from "../view_modifiers/filterEventTagsByType.js";

export default function filterEventTagsByTypeListener() {
	document.addEventListener("change", (e) => {
		if (e.target.matches("[data-action~='filter-event-tags']")) {
			const type = e.target.dataset.type;
			const filter = !e.target.checked;
			filterEventTagsByType(type, filter);
		}
	});
}
