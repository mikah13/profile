"use client"
import {
  CalendarIcon,
  ChevronDownIcon,
  CircleIcon,
  PlusCircledIcon,
  PlusIcon,
  StarIcon,
} from "@radix-ui/react-icons"
import { useMutation, useQuery } from "convex/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { api } from "@/../convex/_generated/api"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Doc, Id } from "@/../convex/_generated/dataModel"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { HeartIcon } from "lucide-react"
import { cn, formatDate, formatDateddmmmyyyy } from "@/lib/utils"
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/ui/page-header"
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
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useForm } from "react-hook-form"
import { getCurrentUser } from "@/lib/session"
import { useToast } from "@/components/ui/use-toast"
import { useSession } from "next-auth/react"
import { Input } from "@/components/ui/input"
import { BoardStatus, Priority } from "@/lib/types"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { Textarea } from "@/components/ui/textarea"
import type { User } from "next-auth"
import { Badge } from "@/components/ui/badge"
type Props = {}
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
  status: z.nativeEnum(BoardStatus),
  priority: z.nativeEnum(Priority),
  startDate: z.date(),
  endDate: z.date(),
})

const PriortyBadgeCard = {
  High: "bg-red-100 dark:bg-red-600 text-red-500 dark:text-white",
  Medium: "bg-yellow-100 dark:bg-yellow-600 text-yellow-500 dark:text-white",
  Low: "bg-green-100 dark:bg-green-600 text-green-500 dark:text-white",
}
function BoardCard({ board }: { board: Doc<"boards"> }) {
  const { _id, title, _creationTime, startDate, endDate, priority, status } =
    board
  const columnAndCard = useQuery(api.board.getBoardColumnTask, {
    boardId: _id,
  })
  const tasks = columnAndCard?.tasks
  const columns = columnAndCard?.columns

  return (
    <div key={_id.toString()} className="tracking-tighter">
      <Card className="cursor-pointer shadow-md hover:shadow-xl dark:shadow-md dark:shadow-indigo-500/50 dark:hover:shadow-indigo-500">
        <CardHeader className="flex flex-row items-center justify-between space-x-2 p-4">
          <div className="space-y-1 ">
            <Badge variant="secondary">{status}</Badge>
            <CardTitle className="text-lg">
              <Link href={`/boards/${_id}`}>{title}</Link>
            </CardTitle>
            <CardDescription>
              {formatDateddmmmyyyy(_creationTime)}
            </CardDescription>
          </div>
          <div className="flex items-center  rounded-md bg-secondary text-secondary-foreground">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  className="  w-12 px-2  shadow-none"
                >
                  <ChevronDownIcon className="h-4 w-4 text-secondary-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                alignOffset={-5}
                className="w-[200px]"
                forceMount
              >
                <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <PlusIcon className="mr-2 h-4 w-4" /> Create List
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-4">
          <div></div>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            {priority && (
              <div className="flex items-center space-x-2 ">
                <Badge
                  variant="outline"
                  className={`${PriortyBadgeCard[priority]} w-16 justify-center text-center`}
                >
                  {priority}
                </Badge>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2  rounded-full bg-sky-500" />
              <span> {tasks?.length} task(s)</span>
            </div>
            <div className="flex items-center space-x-2 ">
              <span className="flex h-2 w-2  rounded-full bg-sky-500" />
              <span> {columns?.length} column(s)</span>
            </div>

            {/* <div>Created {formatDate(_creationTime)}</div> */}
          </div>{" "}
        </CardContent>
      </Card>
    </div>
  )
}

function NewBoardButton({ user }: { user: User }) {
  const mutation = useMutation(api.board.createBoardTemplate)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      status: BoardStatus.planning,
      priority: Priority.medium,
      startDate: new Date(),
      endDate: new Date(),
    },
  })

  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation({
      title: values.title,
      authorId: user.toString(),
      status: values.status,
      priority: values.priority,
      description: values.description,
      startDate: values.startDate.toString(),
      endDate: values.endDate.toString(),
    }).then((result) => {
      if (result) {
        setOpen(false)
        form.reset()
        toast({
          title: "New project has been ceated",
        })
      } else {
        setOpen(false)
        toast({
          title: "Something wrong happened",
          description: `No project has been created`,
        })
      }
    })
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button className="mt-6" onClick={() => setOpen(true)}>
          <PlusCircledIcon className="mr-2 h-4 w-4" /> New Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Create a new project</DialogTitle>
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
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(BoardStatus).map((value, idx) => (
                            <SelectItem value={value} key={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select priority" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {Object.values(Priority).map((value, idx) => (
                            <SelectItem value={value} key={value}>
                              {value}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date: Date) => date < new Date()}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date: Date) => {
                              if (
                                form.getValues() &&
                                form.getValues().startDate !== undefined
                              ) {
                                return date < form.getValues().startDate
                              }
                              return date < new Date()
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="Enter project description..."
                      />
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

function KanbanBoard({ user }: { user: User }) {
  // const createAdventure = useMutation(api.board.createAdventure)
  const boards = useQuery(api.board.get)
  return !boards ? null : (
    <>
      {" "}
      <PageHeader className="page-header px-0 pb-8">
        <PageHeaderHeading className="">Project lists</PageHeaderHeading>
        <PageHeaderDescription>
          <NewBoardButton user={user} />
        </PageHeaderDescription>
      </PageHeader>
      <div className=" items-start justify-center gap-4 rounded-lg md:grid lg:grid-cols-2 lg:gap-3 xl:grid-cols-3">
        {boards.map((board) => (
          <BoardCard board={board} key={board._id} />
        ))}
      </div>
    </>
  )
}

export default KanbanBoard
