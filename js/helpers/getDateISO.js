export default function getDateISO(year, month, day) {
	const date = year && month && day ? new Date(year, month - 1, day) : new Date();

	date.setMinutes(date.getMinutes() - date.getTimezoneOffset());

	return date.toISOString().substring(0, 16);
}
