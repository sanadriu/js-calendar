export default function setFormDates(form, inputNameList, defaultDateISO, minimumDateISO, maximumDateISO) {
	inputNameList.forEach((inputName) => {
		form.elements[inputName].value = defaultDateISO;
		if (minimumDateISO) form.elements[inputName].min = minimumDateISO;
		if (maximumDateISO) form.elements[inputName].max = maximumDateISO;
	});
}
