import getMonthName from "../helpers/getMonthName.js";

export default function displayMonth(year, month) {
	document.querySelector("#calendar_month").textContent = `${year} ${getMonthName(month)}`;
}
