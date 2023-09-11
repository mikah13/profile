"use client"
import React from "react"
import KanbanBoard from "../page"
import { getColumnFromBoard } from "../../../../../convex/column"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { Id } from "@/../convex/_generated/dataModel"
import Link from "next/link"
import BoardColumn from "../_components/BoardColumn"
interface Props {
  params: {
    slug: Id<"boards">
  }
}

function KanbanBoardView(props: { params: { slug: Id<"boards"> } }) {
  const boardId = props.params.slug
  const columns = useQuery(api.column.getColumnFromBoard, {
    boardId,
  })


  return (
    <div>
      <Link href="/boards">all projects</Link>
      <h2>Single Board View</h2>
      <div className="grid-cols-1 md:grid-cols-2 xl:grid-cols-4 grid gap-x-3">
        {columns?.map((column, idx) => {
          return (
            <BoardColumn
              column={column}

              key={idx}
            />
          )
        })}
      </div>
    </div>
  )
}

export default KanbanBoardView
