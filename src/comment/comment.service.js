import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class CommentService {
  async create(user_id, post_id, content_comments) {
    const created_at = new Date().toISOString();
    return await prisma.Comment.create({
      data: {
        post_id: post_id,
        user_id: user_id,
        content_comments: content_comments,
        created_at: created_at,
      },
    }).catch((e) => {
      throw e;
    });
  }

  async findAllById(post_id) {
    return await prisma.Comment.findMany({
      where: {
        post_id,
      },
    });
  }
}

export default CommentService;
