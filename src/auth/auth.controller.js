import AuthService from "./auth.service.js";
import { Router } from "express";
import bodyParser from "body-parser";

const authService = new AuthService();
const authRouter = Router();
const jsonParser = bodyParser.json();

authRouter.post("/sign-in", jsonParser, async (req, res) => {
  const { email, password } = req.body;

  try {
    const token = await authService.signIn(email, password);
    res
      .status(200)
      .json({ message: "Login efetuado com sucesso!", key: token });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

authRouter.post("/sign-up", jsonParser, async (req, res) => {
  console.log(req.body);
  const { username, gender, cargo, email, password } = req.body;
  try {
    const newUser = await authService.signUp(
      username,
      gender,
      cargo,
      email,
      password
    );
    res
      .status(200)
      .json({ user: newUser, message: "Cadastro realizado com sucesso!" });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default authRouter;
