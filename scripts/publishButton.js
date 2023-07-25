function PublishPost() {
  // const input = document.querySelector(
  //   "#divPost > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > pre > span > span"
  // ).textContent;
  const botao = document.getElementById("publ");
  botao.addEventListener("click", async () => {
    const input = simplemde.value();

    const newPost = await fetch("http://127.0.0.1:3000/publish-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        content: input,
        id: +localStorage.getItem("main_user_id"),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert(data.message);
        return data.post;
      })
      .catch((erro) => alert(erro));
  });
}

function PublishComment() {
  // const input = document.querySelector(
  //   "#divPost > div.CodeMirror.cm-s-paper.CodeMirror-wrap > div.CodeMirror-scroll > div.CodeMirror-sizer > div > div > div > div.CodeMirror-code > pre > span > span"
  // ).textContent;
  const botao = document.getElementById("publ");
  botao.addEventListener("click", async () => {
    const input = simplemde.value();

    const newComment = await fetch("http://127.0.0.1:3000/publish-comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify({
        content: input,
        id_user: +localStorage.getItem("main_user_id"),
        id_post: +localStorage.getItem("id_post"),
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        alert(data.message);
        return data.post;
      })
      .catch((erro) => alert(erro));
  });
}
