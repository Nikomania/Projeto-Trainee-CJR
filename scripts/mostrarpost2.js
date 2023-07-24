const modal = document.getElementById("modaloverlay");
const btmcomentar = document.querySelector(".botao");
btmcomentar.addEventListener("click", () => {
  modal.classList.toggle("visible");
});
const btmcancelar = document.getElementById("cancel");
btmcancelar.addEventListener("click", () => {
  modal.classList.toggle("visible");
});
var simplemde = new SimpleMDE({
  toolbar: ["bold", "italic", "heading", "link", "image", "guide"],
});
