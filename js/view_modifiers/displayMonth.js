import getMonthName from "../utils/getMonthName.js";

export default function displayMonth(year, month) {
	document.querySelector("#calendar-date").textContent = `${year} ${getMonthName(month)}`;
}
