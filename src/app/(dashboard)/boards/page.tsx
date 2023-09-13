import React from "react"
import KanbanBoard from "./_components/KanbanBoard"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

type Props = {}

const Boards = async (props: Props) => {
  const user = await getCurrentUser()

  if (!user) redirect("/")
  return (
    <>
      <KanbanBoard user={user} />
    </>
  )
}

export default Boards
