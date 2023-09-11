"use client"

import { useMutation, useQuery } from "convex/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { api } from "@/../convex/_generated/api"
import Link from "next/link"
import { Button } from "@/components/ui/button"
type Props = {}

function KanbanBoard({}: Props) {
  // const createAdventure = useMutation(api.board.createAdventure)
  const boards = useQuery(api.board.get)
  return (
    <div>
      KanbanBoard
      {boards?.map(({ _id, title }) => (
        <div key={_id.toString()}>
          <Link href={`/boards/${_id.toString()}`} key={title}>
            <Button variant="secondary" className="w-full justify-start">
              {title}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default KanbanBoard
