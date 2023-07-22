import express from "express";
import cors from "cors";
import authRouter from "./auth/auth.controller.js";

const app = express();

app.use(cors());
app.use(authRouter);
app.use(express.json);


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});