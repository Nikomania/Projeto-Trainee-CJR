function renderEditButton() {
  const logged2 = localStorage.getItem("login");
  console.log(`edit button ${logged2}`)
  if (logged2) {
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
