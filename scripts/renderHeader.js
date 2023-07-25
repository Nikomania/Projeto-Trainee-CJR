function renderHeader() {
  // Pegar o Header da página
  const header = document.querySelector("header");
  const logged = localStorage.getItem("login");

  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }

  // Criar divs do Header
  const leftDiv = document.createElement("div");
  const rightDiv = document.createElement("div");

  // Adicionar a leftDiv a classe "cjrLogoHeader"
  leftDiv.classList.add("cjrLogoHeader");

  // Definir o HTML dentro de leftDiv
  leftDiv.innerHTML = `
        <a href='../html/tela_feed.html'> 
            <img class="cjrLogoHeaderImg" src="../imgs/cjr_logo.png" alt="logo cjr">
        </a> 
    `;

  if (logged != "true") {
    // Definir o HTML dentro de rightDiv
    rightDiv.innerHTML = `
              <a href="../html/tela_cadastro.html" class="criarConta semSublinhado">Criar Conta</a>
              <a href="../html/tela_login.html" class="entrar semSublinhado">Entrar</a>
        `;
  } else {
    rightDiv.classList.add("user_options");

    let span = document.createElement("span");
    span.classList.add("user_name");
    span.classList.add("name_header");

    let logged_picture = document.createElement("img");
    logged_picture.src = "../imgs/user_no_photo.png";
    logged_picture.classList.add("logged_picture");
    logged_picture.addEventListener("click", () => {
      localStorage.setItem("id_perfil", localStorage.getItem("main_user_id"));
      window.location.href = "../html/perfil_usuario.html";
    });

    let link2 = document.createElement("a");
    link2.href = "../html/tela_login.html";
    link2.onclick = () => {
      localStorage.setItem("login", "false");
      localStorage.setItem("token", "");
    };
    let log_out_picture = document.createElement("img");
    log_out_picture.classList.add("logged_out_picture");
    log_out_picture.src = "../imgs/log-out.png";
    link2.appendChild(log_out_picture);

    rightDiv.appendChild(span);
    rightDiv.appendChild(logged_picture);
    rightDiv.appendChild(link2);
  }

  header.appendChild(leftDiv);
  header.appendChild(rightDiv);
}

function switchHeader() {
  logged = !logged;
  renderHeader();
}
