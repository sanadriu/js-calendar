import closeAsideBar from "../view_modifiers/closeAsideBar.js";

export default function closeAsideBarListener() {
  document.addEventListener("click", (e) => {
    if (e.target.matches("[data-action='close-aside']"))
      closeAsideBar(e.target);
  });
}
