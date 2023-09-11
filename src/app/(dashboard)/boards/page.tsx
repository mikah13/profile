"use client"

import { useMutation, useQuery } from "convex/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { api } from "@/../convex/_generated/api"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import SingleBoardView from "./_components/SingleBoardView"
import { Id } from "@/../convex/_generated/dataModel"
type Props = {}

function KanbanBoard({}: Props) {
  // const createAdventure = useMutation(api.board.createAdventure)
  const boards = useQuery(api.board.get)
  const [currentBoard, setCurrentBoard] = useState<Id<"boards">>()
  useEffect(() => {
    if (boards) {
      setCurrentBoard(boards[0]._id)
    }
  }, [boards])
  return !boards ? null : (
    <div>
      KanbanBoard
      {boards.map(({ _id, title }) => (
        <div key={_id.toString()}>
          <Button
            variant="secondary"
            onClick={() => setCurrentBoard(_id)}
            className="w-full justify-start"
          >
            {title}
          </Button>
        </div>
      ))}
      {currentBoard && <SingleBoardView boardId={currentBoard} />}
    </div>
  )
}

export default KanbanBoard
