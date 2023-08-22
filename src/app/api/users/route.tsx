import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
export async function GET() {
  const users = await prisma.user.findMany({
    take: 10,
    skip: 0,
    orderBy: {
      ["createdAt"]: "desc",
    },
  });
  return NextResponse.json(users);
}
