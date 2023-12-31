async function loginButton() {
  const emailI = document.getElementById("emailInput").value;
  const passwordI = document.getElementById("senhaInput").value;

  fetch("http://127.0.0.1:3000/sign-in", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: emailI,
      password: passwordI,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.message == "Login efetuado com sucesso!") {
        localStorage.setItem("token", data.key);
        localStorage.setItem("login", true);
        localStorage.setItem("main_user_id", data.id);
        window.location.href = "../html/tela_feed.html";
      }

      alert(data.message);
    })
    .catch((erro) => alert(erro));
}
