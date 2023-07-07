function renderEditButton() {
  if (logged) {
    let div = document.querySelector("div.div_edit_button");
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
    let button = document.createElement("button");
    button.classList.add("edit_button");
    button.textContent = "Editar Perfil";
    button.onclick = redirectEditPage();

    div.appendChild(button);
  }
}

function redirectEditPage() {}
