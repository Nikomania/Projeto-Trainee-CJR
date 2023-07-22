import jwt from "jsonwebtoken"
import UserService from "../user/user.service.js"

const userService = new UserService()

class AuthService{
    async signIn(email, password){
        const user = await userService.findByEmail(email);

        if(!user){
            throw new Error("Usuário não cadastrado");
        }

        if(user.senha !== password){
            throw new Error("Senha incorreta");
        }

        const token = jwt.sign({id: user.id, username: user.username, password: user.password, gender: user.gender, email: user.email, created_at: user.created_at}, "secret", {expiresIn: "60m"});
        return token;
    }

    async signUp(name, gender, cargo, email, senha) {
        const salt = await bcrypt.genSalt();
        senha = await bcrypt.hash(senha, salt);
    
        const newUser = await userService.create(name, gender, cargo, email, senha);
        return newUser;
    }
}

export default AuthService;