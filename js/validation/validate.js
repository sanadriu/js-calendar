function prepareFormEvents() {
	document.querySelector("submit", (e) => {
		if (e.target.matches("#event-form")) {
		}
	});
}

function validateEventForm() {
	let validity = true;

	const validationResults = [validateTitle(), validateDescription(), validateInitialDate(), validateEndDate()];

	if (validationResults.findIndex((validation) => validation === false) !== -1) {
		validity = false;
	}

	return validity;
}

const event = {
	title: e.target.title.value,
	initialDate: e.target.initial_date.value,
	endDate: e.target.end_date_chk.checked ? e.target.end_date.value : null,
	reminder: e.target.reminder_chk.checked ? e.target.reminder.value : null,
	description: e.target.description.value,
	type: e.target.type.value,
};

function setDefaultInitialDate() {
	const initialDateInput = document.querySelector("#initial-date");

	const date = new Date();
	initialDate.value = date.toISOString();
}

function setDefaultEndDate() {
	const endDateInput = document.querySelector("#initial-date");

	const date = new Date();
	date.setDate(date.getDate() + 1);

	initialDate.value = date.toISOString();
}

/********************************************************/

function prepareForm() {
	let endDate = document.querySelector("#end-date");
	let endDateCheck = document.querySelector("#end-date-chk");
	document.querySelector("#event-form").addEventListener("submit", validationEventForm);
	endDateCheck.addEventListener("change", validateCheckEndDate);
	document.querySelector("#reminder-chk").addEventListener("change", validateCheckRemind);
}
