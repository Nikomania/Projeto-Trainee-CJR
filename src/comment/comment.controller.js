import CommentService from "./comment.service.js";
import { Router } from "express";
import bodyParser from "body-parser";

const commentService = new CommentService();
const commentRouter = Router();
const jsonParser = bodyParser.json();

commentRouter.post("/get-comments", jsonParser, async (req, res) => {
  const { id } = req.body;
  try {
    const comments = await commentService.findAllById(id);
    res
      .status(200)
      .json({ comments, message: "Requisição feita com sucesso!" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default commentRouter;
