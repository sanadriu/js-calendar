import validateInitialDate from "./validateInitialDate.js";
import validateEndDate from "./validateEndDate.js";
import validateDescription from "./validateDescription.js";
import validateTitle from "./validateTitle.js";

export default function calendarEventFormValidation() {
	let validity = true;

	const validationResults = [validateTitle(), validateDescription(), validateInitialDate(), validateEndDate()];

	if (validationResults.findIndex((validation) => validation === false) !== -1) {
		validity = false;
	}

	return validity;
}
