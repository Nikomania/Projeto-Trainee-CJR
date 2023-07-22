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
}

export default UserService;
