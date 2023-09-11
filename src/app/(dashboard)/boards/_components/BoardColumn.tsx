"use client"
import { Doc } from "@/../convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import React from "react"
import { getCardFromColumn } from "../../../../../convex/card"
import { api } from "@/../convex/_generated/api"
import { useQuery } from "convex/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { formatDate } from "../../../../lib/utils"
type Props = {
  column: Doc<"columns">
}

function ColumnHeader({
  column,
  tasksNumber,
}: {
  column: Doc<"columns">
  tasksNumber: number
}) {
  return (
    <div className="flex  w-full items-center justify-between  rounded-md border bg-slate-100 p-3 dark:bg-slate-900">
      <span className="flex flex-row items-center space-x-2">
        <span> {column.title}</span>
        <Avatar className="h-6 w-6 ">
          <AvatarFallback className="bg-slate-200 dark:bg-slate-600">
            {tasksNumber}
          </AvatarFallback>
        </Avatar>
      </span>
    </div>
  )
}

function AddTaskButton() {
  return (
    <Button variant="outline" className="flex w-full space-x-2 border-dashed ">
      <span>Add Task</span> <PlusCircledIcon className="mr-2 h-4 w-4" />
    </Button>
  )
}
function TaskCard({ card }: { card: Doc<"cards"> }) {
  const { title, description, position, _creationTime } = card
  return (
    <Card className="cursor-pointer bg-slate-100 p-4 tracking-tight dark:bg-slate-900">
      <CardHeader className="p-0">
        <CardDescription>{formatDate(_creationTime)}</CardDescription>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="px-0 pb-0 ">
        <p className="text-md tracking-tighter">{description}</p>
      </CardContent>
      {/* <CardFooter>
        <p>Card Footer</p>
      </CardFooter> */}
    </Card>
  )
}
function BoardColumn({ column }: Props) {
  const cards = useQuery(api.card.getCardFromColumn, {
    columnId: column._id,
  })?.sort((a, b) => a.position - b.position)
  return (
    <div className="col-span-1 mx-auto flex w-full  max-w-[350px] flex-col gap-y-4">
      <ColumnHeader column={column} tasksNumber={cards ? cards.length : 0} />
      <AddTaskButton />
      {cards?.map((card) => <TaskCard card={card} key={card._id} />)}
    </div>
  )
}

export default BoardColumn
