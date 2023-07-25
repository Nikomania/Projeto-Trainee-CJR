{
  /* <div class="post">
  <div class="post_picture user_photo"></div>
  <div class="post_info">
    <div class="post_header">
      <span class="post_name_user user_name"></span>
      <span class="dot">·</span>
      <span class="post_date">{DATA}</span>
    </div>
    <div class="post_content">
      <span class="post_text">
      </span>
      <img src="">
    </div>
    <div>
      <a href="">
          <img class="comentario" src="../imgs/icone-comentario" >
        </a>
    </div>
  </div>
</div>; */
}

async function renderPosts(perfil_usuario) {
  let postList = undefined;
  const id_user = localStorage.getItem("id_perfil");
  if (!perfil_usuario) {
    postList = await fetch("http://127.0.0.1:3000/get-posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .catch((erro) => alert(erro));
  } else {
    postList = await fetch("http://127.0.0.1:3000/get-posts-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: +id_user,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data.posts;
      })
      .catch((erro) => alert(erro));
  }

  let posts_div = document.querySelector(".posts");

  postList.forEach(async (post) => {
    let post_div = document.createElement("div");

    let post_picture_div = document.createElement("div");
    post_picture_div.classList.add("post_picture");
    post_picture_div.classList.add("user_photo");
    post_picture_div.addEventListener("click", () => {
      localStorage.setItem("id_perfil", post.user_id.toString());
      window.location.href = "../html/perfil_usuario.html";
    });

    post_div.appendChild(post_picture_div);

    let post_info_div = document.createElement("div");
    post_info_div.classList.add("post_info");

    // Post_header
    let post_header_div = document.createElement("div");
    post_header_div.classList.add("post_header");

    let span_post_name = document.createElement("span");
    span_post_name.classList.add("post_name_user");
    span_post_name.id = "user_name" + post.id.toString();
    post_header_div.appendChild(span_post_name);

    let span_dot = document.createElement("span");
    span_dot.classList.add("dot");
    span_dot.textContent = " · ";
    post_header_div.appendChild(span_dot);

    let date = new Date(post.update_at);
    let span_post_date = document.createElement("span");
    span_post_date.classList.add("post_date");
    span_post_date.textContent = `${date.getDate()} de ${MONTHS[
      date.getMonth()
    ].slice(0, 3)}`;
    post_header_div.appendChild(span_post_date);

    post_info_div.appendChild(post_header_div);

    post_div.classList.add("post");

    post_content_div = document.createElement("div");
    post_content_div.classList.add("post_content");

    if (post.content !== "") {
      let span = document.createElement("span");
      span.classList.add("post_text");
      span.textContent = post.content;

      post_content_div.appendChild(span);
    }

    post_info_div.appendChild(post_content_div);

    if (localStorage.getItem("login") == "true" && !perfil_usuario) {
      let post_comt_div = document.createElement("div");

      let comentario_link = document.createElement("a");
      comentario_link.href = "../html/tela_post.html";

      let icone_cmt = document.createElement("img");
      icone_cmt.id = post.id.toString();
      icone_cmt.addEventListener("click", (event) => {
        const id_post = event.target.id;
        localStorage.setItem("id_post", id_post);
        window.location.href = "../html/tela_post.html";
      });
      icone_cmt.src = "../imgs/icone-comentario.png";
      icone_cmt.classList.add("comentario");

      comentario_link.appendChild(icone_cmt);
      post_comt_div.appendChild(comentario_link);
      post_info_div.appendChild(post_comt_div);
    }

    post_div.appendChild(post_info_div);
    posts_div.appendChild(post_div);

    const USER = await fetch("http://127.0.0.1:3000/get-user-id", {
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

    insert_name(USER.user.username, "#user_name" + post.id.toString());
  });

  insert_img(USER_PHOTO_PATH, ".user_photo");
}
