import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getPostById = async (id: number) => {
  const post = await prisma.post.findFirst({
    where: { id },
  });

  return post;
};
