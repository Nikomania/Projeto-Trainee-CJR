import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService {
  async create(username, gender, cargo, email, senha) {
    const created_at = new Date().toISOString();
    try {
      return await prisma.User.create({
        data: {
          username,
          gender,
          cargo,
          email,
          senha,
          created_at,
          comentarios: {},
          posts: {},
        },
      });
    } catch (e) {
      if (e.code == "P2002")
        throw new Error("Usuário com mesmo email já registrado");
      throw e;
    }
  }

  async findAll() {
    return await prisma.User.findMany();
  }

  async delete(id) {
    return await prisma.User.delete({
      where: {
        id,
      },
    }).catch((e) => {
      if (e.code == "P2025") throw new Error("Usuário não encontrado");
      throw e;
    });
  }

  async findByEmail(email) {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async findById(id) {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  verify_data(username, gender, cargo, email, password) {
    const user = [username, gender, cargo, email, password];
    user.forEach((element) => {
      if (element.length < 4) {
        throw new Error("Dados inválidos");
      }
    });

    if (!email.includes("@")) {
      throw new Error("Email inválido");
    }

    if (
      gender == "undefined" ||
      (gender != "Masculino" && gender != "Feminino" && gender != "Outros")
    ) {
      throw new Error("Gênero inválido");
    }
  }
}

export default UserService;
