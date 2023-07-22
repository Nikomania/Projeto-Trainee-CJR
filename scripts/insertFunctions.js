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
