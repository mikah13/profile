"use client"
import React from "react"
import KanbanBoard from "../page"
import { getColumnFromBoard } from "../../../../../convex/column"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
import { Id } from "@/../convex/_generated/dataModel"
import BoardColumn from "../_components/BoardColumn"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
import Link from "next/link"
import { cn, formatDate } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"

interface Props {
  params: {
    slug: Id<"boards">
  }
}

function KanbanBoardView(props: { params: { slug: Id<"boards"> } }) {
  const boardId = props.params.slug
  const board = useQuery(api.board.getBoardById, { boardId })
  const columns = useQuery(api.column.getColumnFromBoard, {
    boardId,
  })
  console.log(board)
  if (!board) {
    return null
  }

  return (
    <>
      <PageHeader className="page-header pb-8">
        {" "}
        <PageHeaderHeading className="">{board.title}</PageHeaderHeading>
        <Link
          href="/boards"
          className={cn(buttonVariants({ variant: "ghost" }), "")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all projects
        </Link>
        <PageHeaderDescription></PageHeaderDescription>
      </PageHeader>
      <div className="grid grid-cols-1 gap-x-3 md:grid-cols-2 xl:grid-cols-4">
        {columns?.map((column, idx) => {
          return <BoardColumn column={column} key={idx} />
        })}
      </div>
    </>
  )
}

export default KanbanBoardView
