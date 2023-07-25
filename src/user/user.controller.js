import UserService from "./user.service.js";
import { Router } from "express";
import bodyParser from "body-parser";
import JwtGuard from "../auth/guards/jwt.guards.js";

const userService = new UserService();
const userRouter = Router();
const jsonParser = bodyParser.json();

userRouter.post("/get-user-id", jsonParser, async (req, res) => {
  const { id } = req.body;
  try {
    const user = await userService.findById(id);
    res.status(200).json({ user });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

userRouter.get("/get-user", jsonParser, JwtGuard, async (req, res) => {
  const user = req.user;
  res.status(200).json({ user, message: "Requisição concluída com sucesso" });
});

export default userRouter;
