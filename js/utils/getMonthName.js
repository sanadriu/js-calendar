export default function getMonthName(month) {
	const monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return monthNameList[month - 1];
}
