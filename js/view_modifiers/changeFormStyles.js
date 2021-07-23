export default function changeFormStyles() {
  document.addEventListener("change", function (e) {
    if (e.target.matches("[data-action='select-type']")) {
      let type = document.getElementById("type").value;
      let inputs = document.querySelectorAll(".event-form__input");
      let title = document.querySelector(".event-form__title");
      let selects = document.querySelectorAll(".event-form__select");
      let textArea = document.querySelector(".event-form__textarea");
      let check = document.querySelectorAll(".event-form__input-chk");

      switch (type) {
        case "Meeting":
          inputs.forEach((e) => (e.style.borderBottom = "2px solid red"));
          //   title.style.borderBottom = "2px solid red";
          title.textContent = "NEW EVENT - MEETING";
          selects.forEach((e) => (e.style.borderBottom = "2px solid red"));
          textArea.style.border = "2px solid red";
          document.querySelector(".event-form").style.boxShadow = "0 0 8px red";
          check.forEach((e) => (e.style.boxShadow = "0 0 5px red"));
          break;
        case "Task":
          inputs.forEach((e) => (e.style.borderBottom = "2px solid green"));
          selects.forEach((e) => (e.style.borderBottom = "2px solid green"));
          //   title.style.borderBottom = "2px solid green";
          title.textContent = "NEW EVENT - TASK";
          textArea.style.border = "2px solid green";
          document.querySelector(".event-form").style.boxShadow =
            "0 0 8px green";
          check.forEach((e) => (e.style.boxShadow = "0 0 5px green"));
          break;
        case "Personal":
          inputs.forEach((e) => (e.style.borderBottom = "2px solid orange"));
          selects.forEach((e) => (e.style.borderBottom = "2px solid orange"));
          //   title.style.borderBottom = "2px solid orange";
          title.textContent = "NEW EVENT - PERSONAL";
          textArea.style.border = "2px solid orange";
          document.querySelector(".event-form").style.boxShadow =
            "0 0 8px orange";
          check.forEach((e) => (e.style.boxShadow = "0 0 5px orange"));
          break;
        case "Study":
          inputs.forEach((e) => (e.style.borderBottom = "2px solid blue"));
          selects.forEach((e) => (e.style.borderBottom = "2px solid blue"));
          //   title.style.borderBottom = "2px solid blue";
          title.textContent = "NEW EVENT - STUDY";
          textArea.style.border = "2px solid blue";
          document.querySelector(".event-form").style.boxShadow =
            "0 0 8px blue";
          check.forEach((e) => (e.style.boxShadow = "0 0 5px blue"));
          break;
      }
    }
  });
}
