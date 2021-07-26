import changeFormStyles from "../view_modifiers/changeFormStyles.js";

export default function changeFormStylesListener() {
	document.addEventListener("change", function (e) {
		if (e.target.matches("[data-action~='select-type']")) {
			changeFormStyles();
		}
	});
}
