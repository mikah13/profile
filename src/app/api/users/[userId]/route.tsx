import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params // 'a', 'b', or 'c'

  const user = await prisma.user.findMany({
    where: {
      id: userId,
    },
  })

  if (user.length > 0) {
    return NextResponse.json(user)
  }

  return NextResponse.json({ message: "No User Found" }, { status: 200 })
}
