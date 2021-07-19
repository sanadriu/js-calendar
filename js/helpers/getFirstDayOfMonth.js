export default function getFirstDayOfMonth(yearNum, monthNum) {
  return new Date(yearNum, monthNum - 1, 1);
}
