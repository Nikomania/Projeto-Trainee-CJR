import express from "express";
import cors from "cors";
import authRouter from "./auth/auth.controller.js";
import postRouter from "./post/post.controller.js";
// import commentRouter from "./comment/comment.controller.js";
import userRouter from "./user/user.controller.js";

const app = express();

app.use(cors());
app.use(authRouter);
app.use(postRouter);
// app.use(commentRouter);
app.use(userRouter);
app.use(express.json);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
