export default function changeFormStyles() {
	const form = document.querySelector("#event-form");
	const type = form.querySelector("#type").value;

	const title = form.querySelector(".event-form__title");
	const textArea = form.querySelector(".event-form__textarea");

	const inputs = form.querySelectorAll(".event-form__input");
	const checks = form.querySelectorAll(".event-form__input-chk");
	const selects = form.querySelectorAll(".event-form__select");

	switch (type) {
		case "Meeting":
			form.style.boxShadow = "0 0 4px rgba(255, 0, 0, 0.5)";
			title.textContent = "New event - Meeting";
			inputs.forEach((e) => (e.style.borderBottom = "2px solid rgba(255, 0, 0, 0.5)"));
			selects.forEach((e) => (e.style.borderBottom = "2px solid rgba(255, 0, 0, 0.5)"));
			checks.forEach((e) => (e.style.boxShadow = "0 0 5px rgba(255, 0, 0, 0.5)"));
			textArea.style.border = "2px solid rgba(255, 0, 0, 0.5)";
			break;
		case "Task":
			form.style.boxShadow = "0 0 4px green";
			title.textContent = "New event - Task";
			inputs.forEach((e) => (e.style.borderBottom = "2px solid green"));
			selects.forEach((e) => (e.style.borderBottom = "2px solid green"));
			checks.forEach((e) => (e.style.boxShadow = "0 0 5px green"));
			textArea.style.border = "2px solid green";
			break;
		case "Personal":
			form.style.boxShadow = "0 0 4px orange";
			title.textContent = "New event - Personal";
			inputs.forEach((e) => (e.style.borderBottom = "2px solid orange"));
			selects.forEach((e) => (e.style.borderBottom = "2px solid orange"));
			checks.forEach((e) => (e.style.boxShadow = "0 0 5px orange"));
			textArea.style.border = "2px solid orange";
			break;
		case "Study":
			form.style.boxShadow = "0 0 4px rgba(0, 0, 255, 0.5)";
			title.textContent = "New event - Study";
			inputs.forEach((e) => (e.style.borderBottom = "2px solid rgba(0, 0, 255, 0.5)"));
			selects.forEach((e) => (e.style.borderBottom = "2px solid rgba(0, 0, 255, 0.5)"));
			checks.forEach((e) => (e.style.boxShadow = "0 0 5px rgba(0, 0, 255, 0.5)"));
			textArea.style.border = "2px solid rgba(0, 0, 255, 0.5)";
			break;
	}
}
