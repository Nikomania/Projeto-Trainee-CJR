function renderEditButton() {
  const logged2 = localStorage.getItem("login");
  if (
    logged2 == "true" &&
    localStorage.getItem("id_perfil") == localStorage.getItem("main_user_id")
  ) {
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
