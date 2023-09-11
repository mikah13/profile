"use client"
import React from "react"
import KanbanBoard from "../page"
import { getColumnFromBoard } from "../../../../../convex/column"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { Id } from "@/../convex/_generated/dataModel"
interface Props {
  params: {
    boardId: Id<"boards">
  }
}

function KanbanBoardView(props: { params: { boardId: Id<"boards"> } }) {
  const boardId = props.params.boardId

  const columns = useQuery(api.column.getColumnFromBoard, {
    boardId,
  })
  return (
    <div>
      {boardId}
      {columns?.map(({ _id, title }) => {
        return <div key={_id.toString()}>{title}</div>
      })}
    </div>
  )
}

export default KanbanBoardView
