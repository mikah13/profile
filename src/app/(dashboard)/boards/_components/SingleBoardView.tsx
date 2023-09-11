"use client"

import React from "react"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { Id } from "@/../convex/_generated/dataModel"
import { getColumnFromBoard } from "@/../convex/column"
type Props = {
  boardId: Id<"boards">
}

function SingleBoardView({ boardId }: Props) {
  const columns = useQuery(api.column.getColumnFromBoard, {
    boardId,
  })
  console.log(boardId, columns)
  return (
    <div>
      SingleBoardView
      {columns?.map((column, idx) => {
        return <div key={idx}>{column.title}</div>
      })}
    </div>
  )
}

export default SingleBoardView
