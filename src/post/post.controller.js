import PostService from "./post.service.js";
import { Router } from "express";
import bodyParser from "body-parser";

const postService = new PostService();
const postRouter = Router();
const jsonParser = bodyParser.json();

postRouter.get("/get-posts", jsonParser, async (req, res) => {
  const posts = await postService.findAll();

  res.status(200).json(posts);
});

postRouter.post("/get-posts-user", jsonParser, async (req, res) => {
  const { id } = req.body;
  try {
    const posts = await postService.findAllByUser(id);
    res.status(200).json({ posts, message: "Requisição feita com sucesso!" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

postRouter.post("/get-post-id", jsonParser, async (req, res) => {
  const { id } = req.body;
  try {
    const posts = await postService.findById(id);
    res.status(200).json({ posts, message: "Requisição feita com sucesso!" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default postRouter;
