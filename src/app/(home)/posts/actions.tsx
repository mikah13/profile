import { prisma } from "@/lib/prisma";
import { z } from "zod";



export async function getAllPosts() {
  const posts = await prisma.post.findMany({
    take: 10,
    skip: 0,
    where: { published: true },
    orderBy: {
      ["createdAt"]: "desc",
    },
  });
  return posts;
}

export async function getPostById(id: string) {
  const user = await prisma.post.findFirst({
    where: { id: id },
  });
  return user;
}

export async function getUserById(userId: string) {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  return user;
}
