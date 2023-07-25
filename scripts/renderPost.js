// Post provisório
// const post = {
//   id: 1,
//   user: "Joazin gamer",
//   date: "17 de mar",
//   content:
//     "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
//   photo: "../imgs/mulher.png",
// };

// Lista provisória de comentários
// const comentarios = [
//   {
//     id: 1,
//     user: "Beltrana",
//     date: "17 de mar",
//     content:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
//     photo: "../imgs/mulher.png",
//   },
//   {
//     id: 2,
//     user: "Fulana",
//     date: "17 de mar",
//     content:
//       "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin",
//     photo: "../imgs/mulher.png",
//   },
// ];

// Renderiza os comentários do post aberto
async function renderComments(divPostAberto) {
  const comentarios = await fetch("http://127.0.0.1:3000/get-comments", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: +localStorage.getItem("id_post"),
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.comments;
    })
    .catch((erro) => alert(erro));

  const divComentarios = document.createElement("div");

  for (let i = 0; i < comentarios.length; i++) {
    const user_comment = await fetch("http://127.0.0.1:3000/get-user-id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: comentarios[i].user_id }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.user;
      })
      .catch((erro) => alert(erro));

    const date2 = new Date(comentarios[i].created_at);

    const divComment = document.createElement("div");
    divComment.classList.add("divPost");
    divComment.innerHTML = `
            <div class="postHeader">
                <img id="${
                  user_comment.id
                }" src="../imgs/user_no_photo.png" class="imgPerfil">
                <h4 class="usrName">${user_comment.username}</h4>
                <p class="ponto">.</p>
                <p class="postDate">${date2.getDate()} de ${MONTHS[
      date2.getMonth()
    ].slice(0, 3)}</p>
            </div>
            <div class="postContent">
                <p>${comentarios[i].content_comments}</p>
            </div>
        `;
    divComentarios.appendChild(divComment);
  }
  divPostAberto.appendChild(divComentarios);
  const imgPerfils = document.querySelectorAll(".imgPerfil");
  imgPerfils.forEach((imgPerfil) => {
    imgPerfil.addEventListener("click", (event) => {
      localStorage.setItem("id_perfil", event.target.id);
      window.location.href = "../html/perfil_usuario.html";
    });
  });
}

// Renderiza o post selecionado

// Renderiza o post aberto e seus comentários
async function renderPost() {
  const post = await fetch("http://127.0.0.1:3000/get-post-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: +localStorage.getItem("id_post"),
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data.posts;
    })
    .catch((erro) => alert(erro));

  // Adquirir div main
  const divMain = document.querySelector(".sectionFeed");
  // Criar a div que contem o post aberto e os comentários
  const divPostAberto = document.createElement("div");
  divPostAberto.classList.add("postAberto");

  divPostAberto.innerHTML = `
    <a href="../html/tela_feed.html" class="seta">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.1">
            <path d="M19 12H5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 19L5 12L12 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
        </svg>
    </a>
    `;
  // Criar a div que contem o post
  const divPost = document.createElement("div");
  divPost.classList.add("divPost");

  const user_post_req = await fetch("http://127.0.0.1:3000/get-user-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: post.user_id }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((erro) => alert(erro));

  const user_post = user_post_req.user;
  const date = new Date(post.update_at);

  // Colocar o post na div
  divPost.innerHTML = `
        <div class="postHeader">
            <img id="${
              user_post.id
            }" src="../imgs/user_no_photo.png" class="imgPerfil">
            <h4 class="usrName">${user_post.username}</h4>
            <p class="ponto">.</p>
            <p class="postDate">${date.getDate()} de ${MONTHS[
    date.getMonth()
  ].slice(0, 3)}</p>
        </div>
        <div class="postContent">
            <p>${post.content}</p>
        </div>
        <a href="" class="balaoComentario">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.1025 1L17.0307 4L19 10L16.5 15.5L11.5 18L6.5 16.5L2.5 17.5L3.5 13.5L2.5 9.5L3.17432 4L10.1025 1Z" fill="#003366"/>
                <path d="M19 9.50003C19.0034 10.8199 18.6951 12.1219 18.1 13.3C17.3944 14.7118 16.3098 15.8992 14.9674 16.7293C13.6251 17.5594 12.0782 17.9994 10.5 18C9.18013 18.0035 7.87812 17.6951 6.7 17.1L1 19L2.9 13.3C2.30493 12.1219 1.99656 10.8199 2 9.50003C2.00061 7.92179 2.44061 6.37488 3.27072 5.03258C4.10083 3.69028 5.28825 2.6056 6.7 1.90003C7.87812 1.30496 9.18013 0.996587 10.5 1.00003H11C13.0843 1.11502 15.053 1.99479 16.5291 3.47089C18.0052 4.94699 18.885 6.91568 19 9.00003V9.50003Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
    `;
  divPostAberto.appendChild(divPost);
  renderComments(divPostAberto);

  // Criar botão de comentar
  const divComentar = document.createElement("div");
  divComentar.classList.add("divComentar");

  divComentar.innerHTML = `
        <button class="buttonComentar">Comentar</button>
    `;
  divPostAberto.appendChild(divComentar);
  divMain.appendChild(divPostAberto);

  const imgPerfils = document.querySelectorAll(".imgPerfil");
  imgPerfils.forEach((imgPerfil) => {
    imgPerfil.addEventListener("click", (event) => {
      localStorage.setItem("id_perfil", event.target.id);
      window.location.href = "../html/perfil_usuario.html";
    });
  });

  if (localStorage.getItem("login") == "false") {
    const balao = document.querySelector(".buttonComentar");
    balao.style.display = "none";
  }
}
