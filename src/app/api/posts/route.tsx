import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const posts = await prisma.post.findMany({
    take: 10,
    skip: 0,
    orderBy: {
      ["createdAt"]: "desc",
    },
  });
  return NextResponse.json(posts);
}
