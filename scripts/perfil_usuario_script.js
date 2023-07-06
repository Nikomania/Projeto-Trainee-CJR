function insert_name(user_name) {
  let Ps = document.querySelectorAll(".user_name");
  Array.from(Ps).forEach((p) => {
    p.textContent = user_name;
  });
}

const NAME = "Joazin gamer";
insert_name(NAME);
