import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import UserService from "../user/user.service.js";

import dotenv from "dotenv";

dotenv.config();
const userService = new UserService();

class AuthService {
  async signIn(email, password) {
    const user = await userService.findByEmail(email);

    if (!user) {
      throw new Error("Usuário não cadastrado");
    }

    if (!(await bcrypt.compare(password, user.senha))) {
      throw new Error("Senha incorreta");
    }

    const token = jwt.sign(
      {
        id: user.id,
        cargo: user.cargo,
        username: user.username,
        gender: user.gender,
        email: user.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "60m" }
    );

    return { user, token };
  }

  async signUp(name, gender, cargo, email, senha) {
    const salt = await bcrypt.genSalt();
    senha = await bcrypt.hash(senha, salt);
    let newUser = undefined;

    try {
      newUser = await userService.create(name, gender, cargo, email, senha);
    } catch (e) {
      throw e;
    }
    return newUser;
  }
}

export default AuthService;
