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
  </div>
</div>; */
}

function renderPosts() {
  let posts_div = document.querySelector(".posts");

  postList.forEach((post) => {
    let post_div = document.createElement("div");
    post_div.addEventListener("click", () => {
      window.location.href = "../html/tela_post.html";
    });

    let post_picture_div = document.createElement("div");
    post_picture_div.classList.add("post_picture");
    post_picture_div.classList.add("user_photo");

    post_div.appendChild(post_picture_div);

    let post_info_div = document.createElement("div");
    post_info_div.classList.add("post_info");

    // Post_header
    let post_header_div = document.createElement("div");
    post_header_div.classList.add("post_header");

    let span_post_name = document.createElement("span");
    span_post_name.classList.add("post_name_user");
    span_post_name.classList.add("user_name");
    post_header_div.appendChild(span_post_name);

    let span_dot = document.createElement("span");
    span_dot.classList.add("dot");
    span_dot.textContent = " · ";
    post_header_div.appendChild(span_dot);

    let span_post_date = document.createElement("span");
    span_post_date.classList.add("post_date");
    span_post_date.textContent = `${post.date.day} de ${
      MONTHS[post.date.month - 1]
    }`;
    post_header_div.appendChild(span_post_date);

    post_info_div.appendChild(post_header_div);

    post_div.classList.add("post");

    post_content_div = document.createElement("div");
    post_content_div.classList.add("post_content");

    post.content.forEach((content) => {
      if (content.textContent !== "") {
        let span = document.createElement("span");
        span.classList.add("post_text");
        span.textContent = content.textContent;

        post_content_div.appendChild(span);
      }
      if (content.imagePath !== "") {
        let img = document.createElement("img");
        img.classList.add("post_img");
        img.src = content.imagePath;
        img.alt = "post_img";

        post_content_div.appendChild(img);
      }
    });

    post_info_div.appendChild(post_content_div);
    post_div.appendChild(post_info_div);
    posts_div.appendChild(post_div);
  });
}
