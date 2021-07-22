export default function getDaysInMonth(yearNum, monthNum) {
	return new Date(yearNum, monthNum, 0).getDate();
}
