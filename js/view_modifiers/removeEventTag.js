export default function removeEventTag(idEvent) {
	const eventTag = document.querySelector(`.event-tag[data-event='${idEvent}']`);

	if (eventTag !== null) eventTag.remove();
}
