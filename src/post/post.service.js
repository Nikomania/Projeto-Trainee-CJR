import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class PostService {
  async create(user_id, content) {
    const created_at = new Date().toISOString();
    try {
      return await prisma.Post.create({
        data: {
          user_id,
          content,
          created_at,
          created_at,
          comentarios: {},
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async findAll() {
    return await prisma.Post.findMany();
  }

  async findById(id) {
    return await prisma.Post.findUnique({
      where: {
        id,
      },
    });
  }

  async findAllByUser(user_id) {
    return await prisma.post.findMany({
      where: {
        user_id,
      },
    });
  }
}

export default PostService;
