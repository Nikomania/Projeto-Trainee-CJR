function insert_name(content, class_name) {
  let Ps = document.querySelectorAll(class_name);
  Array.from(Ps).forEach((p) => {
    p.textContent = content;
  });
}

function insert_img(path, class_name) {
  let Imgs_div = document.querySelectorAll(class_name);
  Array.from(Imgs_div).forEach((img_div) => {
    img = document.createElement("img");
    img.src = path;
    img.classList.add("profile_picture");
    img_div.appendChild(img);
  });
}

async function get_main_user() {
  if (localStorage.getItem("login") == "true") {
    const USER_REQ = await fetch("http://127.0.0.1:3000/get-user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
      .catch((e) => {
        alert(e.message);
      });
    MAIN_USER = USER_REQ.user;
    insert_name(MAIN_USER.username, ".user_name");
    insert_name(MAIN_USER.cargo, ".user_cargo");
    insert_name(MAIN_USER.email, ".user_email");
    insert_name(MAIN_USER.gender, ".user_gender");

    return MAIN_USER;
  }
}

async function get_perfil_user(id_perfil) {
  const USER_REQ = await fetch("http://127.0.0.1:3000/get-user-id", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: +id_perfil }),
  })
    .then((res) => {
      return res.json();
    })
    .catch((erro) => alert(erro));

  PERFIL_USER = USER_REQ.user;
  insert_name(PERFIL_USER.username, ".user_perfil_name");
  insert_name(PERFIL_USER.cargo, ".user_perfil_cargo");
  insert_name(PERFIL_USER.email, ".user_perfil_email");
  insert_name(PERFIL_USER.gender, ".use_perfil_gender");

  return PERFIL_USER;
}
