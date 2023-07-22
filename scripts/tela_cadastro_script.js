let clicked = false;
let genero = undefined;

function renderCampoGenero() {
  let options = document.querySelectorAll(".options");
  let select = document.getElementById("select");
  let place_holder = document.getElementById("genero_placeholder");

  select.addEventListener("click", () => {
    options.forEach((option) => {
      option.style.opacity = clicked ? 0 : 1;
    });
    clicked = !clicked;
  });

  options.forEach((option) => {
    option.addEventListener("click", (event) => {
      if (clicked) {
        place_holder.textContent = genero = event.target.textContent;
      }
    });
  });
}
