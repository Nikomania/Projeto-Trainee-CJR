async function signupButton() {
  const usernameI = document.getElementById("nome").value;
  const genderI = localStorage.getItem("genero");
  const cargoI = document.getElementById("cargo").value;
  const emailI = document.getElementById("email").value;
  const passwordI = document.getElementById("senha").value;

  fetch("http://127.0.0.1:3000/sign-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: usernameI,
      gender: genderI,
      cargo: cargoI,
      email: emailI,
      password: passwordI,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data.message == "Cadastro realizado com sucesso!") {
        window.location.href = "../html/tela_login.html";
      }
      alert(data.message);
    })
    .catch((erro) => alert(erro));
}
