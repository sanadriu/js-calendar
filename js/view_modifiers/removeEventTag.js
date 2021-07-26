export default function removeEventTag(idEvent) {
	const eventTag = document.querySelector(`[data-event='${idEvent}']`);

	if (eventTag !== null) eventTag.remove();
}
