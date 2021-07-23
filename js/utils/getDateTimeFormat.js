export default function getDateTimeFormat(locale, dateStr) {
	return new Intl.DateTimeFormat(locale, { dateStyle: "long", timeStyle: "short" }).format(new Date(dateStr));
}
