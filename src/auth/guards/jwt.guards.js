import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function JwtGuard(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    res.status(401).json({ message: "Token não informado" });
  }

  const [prefix, token] = authorization.split(" ");

  if (prefix !== "Bearer") {
    res.status(401).json({ message: "Token mal informado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JwtGuard);
    req.user = decoded;
    next();
  } catch (e) {
    res.status(401).json({ message: e.message });
  }
}
