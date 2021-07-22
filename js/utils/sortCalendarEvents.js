export default function sortCalendarEvents(a, b) {
	if (a.initialDate < b.initialDate) return -1;
	if (a.initialDate > b.initialDate) return 1;

	return 0;
}
