import AuthService from "./auth.service.js";
import { Router } from "express";
import bodyParser from "body-parser";
import UserService from "../user/user.service.js";

const authService = new AuthService();
const authRouter = Router();
const jsonParser = bodyParser.json();
const userService = new UserService();

authRouter.post("/sign-in", jsonParser, async (req, res) => {
  const { email, password } = req.body;

  try {
    const { user, token } = await authService.signIn(email, password);
    res
      .status(200)
      .json({
        message: "Login efetuado com sucesso!",
        key: token,
        id: user.id,
      });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

authRouter.post("/sign-up", jsonParser, async (req, res) => {
  console.log(req.body);
  const { username, gender, cargo, email, password } = req.body;
  try {
    userService.verify_data(username, gender, cargo, email, password);
    const newUser = await authService.signUp(
      username,
      gender,
      cargo,
      email,
      password
    );
    console.log({ user: newUser, message: "Cadastro realizado com sucesso!" });
    res
      .status(200)
      .json({ user: newUser, message: "Cadastro realizado com sucesso!" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default authRouter;
