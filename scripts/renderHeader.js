function renderHeader() {
  // Pegar o Header da página
  const header = document.querySelector("header");
  // const logged2 = localStorage.getItem("login");

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
        <a href=''> 
            <img class="cjrLogoHeaderImg" src="../imgs/cjr_logo.png" alt="logo cjr">
        </a> 
    `;

  // if (!logged2) {
    // Definir o HTML dentro de rightDiv
    rightDiv.innerHTML = `
            <a href="../html/tela_cadastro.html" class="criarConta semSublinhado">Criar Conta</a>
            <a href="../html/tela_login.html" class="entrar semSublinhado">Entrar</a>
      `;
  // } else {
  //   console.log(logged2);
  //   rightDiv.classList.add("user_options");

  //   let span = document.createElement("span");
  //   span.classList.add("user_name");
  //   span.classList.add("name_header");

  //   let logged_picture = document.createElement("img");
  //   logged_picture.src = "../imgs/user_photo.png";
  //   logged_picture.classList.add("logged_picture");

  //   let link = document.createElement("a");
  //   link.href = "";
  //   let log_out_picture = document.createElement("img");
  //   log_out_picture.classList.add("logged_out_picture");
  //   log_out_picture.src = "../imgs/log-out.png";
  //   link.appendChild(log_out_picture);

  //   rightDiv.appendChild(span);
  //   rightDiv.appendChild(logged_picture);
  //   rightDiv.appendChild(link);
  // }

  header.appendChild(leftDiv);
  header.appendChild(rightDiv);
}

function switchHeader() {
  logged = !logged;
  renderHeader();
}

function loggedHeader(){
    // Pegar o Header da página
    const header = document.querySelector("header");

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
          <a href=''> 
              <img class="cjrLogoHeaderImg" src="../imgs/cjr_logo.png" alt="logo cjr">
          </a> 
      `;


    rightDiv.classList.add("user_options");

    let span = document.createElement("span");
    span.classList.add("user_name");
    span.classList.add("name_header");

    let logged_picture = document.createElement("img");
    logged_picture.src = "../imgs/user_photo.png";
    logged_picture.classList.add("logged_picture");

    let link = document.createElement("a");
    link.href = "";
    let log_out_picture = document.createElement("img");
    log_out_picture.classList.add("logged_out_picture");
    log_out_picture.src = "../imgs/log-out.png";
    link.appendChild(log_out_picture);

    rightDiv.appendChild(span);
    rightDiv.appendChild(logged_picture);
    rightDiv.appendChild(link);


    header.appendChild(leftDiv);
    header.appendChild(rightDiv);
}
