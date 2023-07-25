function renderBotao() {
  if (localStorage.getItem("login") != "true") {
    const botao = document.querySelector(".botao");
    botao.style.display = "none";
  }
}

renderBotao();
renderPosts(false);
if (localStorage.getItem("login") == "true") MAIN_USER = get_main_user();
