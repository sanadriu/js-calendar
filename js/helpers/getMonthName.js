export default function getMonthName() {
	const monthNameList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

	return monthNameList[fecha.getMonth()];
}
