"use client"
import { Doc } from "@/../convex/_generated/dataModel"
import { Button } from "@/components/ui/button"
import React, { useState } from "react"
import { getCardFromColumn } from "../../../../../convex/card"
import { api } from "@/../convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons"
import { formatDate } from "../../../../lib/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea"
import { SiRedhatopenshift } from "react-icons/si"
import { useToast } from "@/components/ui/use-toast"

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
})
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

function AddTaskButton({
  column,
  newPosition,
}: {
  column: Doc<"columns">
  newPosition: number
}) {
  const { title, _id, boardId } = column
  const mutation = useMutation(api.card.create)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  })

  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation({
      title: values.title,
      description: values.description,
      columnId: _id,
      boardId: boardId,
      position: newPosition,
    }).then((result) => {
      if (result) {
        setOpen(false)
        toast({
          title: "A new task has been added",
          description: `${result.title} has been added to ${title}`,
        })
        form.reset()
      } else {
        setOpen(false)
        toast({
          title: "Something wrong happened",
          description: `No task has been created`,
        })
      }
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="flex w-full space-x-2 border-dashed "
        >
          <span>Add Task</span> <PlusCircledIcon className="mr-2 h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create new task</DialogTitle>
          <DialogDescription>Add your new task to {title}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title*</FormLabel>
                    <FormControl>
                      <Input placeholder="Title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Task description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
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
  const cardsLength = cards ? cards.length : 0
  return (
    <div className="col-span-1 mx-auto flex w-full  max-w-[350px] flex-col gap-y-4">
      <ColumnHeader column={column} tasksNumber={cardsLength} />
      <AddTaskButton column={column} newPosition={cardsLength} />
      {cards?.map((card) => <TaskCard card={card} key={card._id} />)}
    </div>
  )
}

export default BoardColumn
