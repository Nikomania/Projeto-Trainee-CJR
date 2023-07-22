function renderBotao() {
  if (localStorage.getItem("login") != "true") {
    const botao = document.querySelector(".botao");
    botao.style.display = "none";
  }
}
