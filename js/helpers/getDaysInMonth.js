export default function getDaysInMonth(yearNum, monthNum) {
  return new Date(yearNum, monthNum - 1, 0).getDate();
}
