import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentService {
  async findAllById(post_id) {
    return await prisma.Comment.findMany({
      where: {
        post_id,
      },
    });
  }
}

export default CommentService;
