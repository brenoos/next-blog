import { Post, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany();

  return posts;
}
