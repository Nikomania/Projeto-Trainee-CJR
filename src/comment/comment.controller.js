import CommentService from "./comment.service.js";
import { Router } from "express";
import bodyParser from "body-parser";
import JwtGuard from "../auth/guards/jwt.guards.js";

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

commentRouter.post(
  "/publish-comment",
  jsonParser,
  JwtGuard,
  async (req, res) => {
    const { content, id_user, id_post } = req.body;
    if (id_user != req.user.id) {
      return res
        .status(401)
        .json({ message: "Você não tem permissão para publicar!" });
    }

    try {
      const newComment = await commentService.create(id_user, id_post, content);
      res.status(201).json({
        comment: newComment,
        message: "Houve êxito na execução na publicação!",
      });
    } catch (e) {
      res.status(400).json({ message: e.message });
    }
  }
);

export default commentRouter;
