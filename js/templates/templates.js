export function createCalendarCell() {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector("#template-calendar-cell").content.cloneNode(true);

  fragment.appendChild(template);

  return fragment;
}

export function createCalendarCellEvent() {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector("#template-calendar-event").content.cloneNode(true);

  fragment.appendChild(template);

  return fragment;
}

export function createModal() {
  const fragment = document.createDocumentFragment();
  const template = document.querySelector("#template-modal").content.cloneNode(true);

  fragment.appendChild(template);

  return fragment;
}
