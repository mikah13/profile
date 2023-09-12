"use client"
import {
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
import { formatDate, formatDateddmmmyyyy } from "@/lib/utils"
import { getCardFromBoard } from "../../../../convex/card"
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
import { redirect } from "next/navigation"

type Props = {}
const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  description: z.string().optional(),
})
function BoardCard({ board }: { board: Doc<"boards"> }) {
  const { _id, title, _creationTime } = board
  const columnAndCard = useQuery(api.board.getBoardColumnCard, {
    boardId: _id,
  })
  const cards = columnAndCard?.cards
  const columns = columnAndCard?.columns

  return (
    <div key={_id.toString()}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-x-2">
          <div className="space-y-1 ">
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
        <CardContent>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2  rounded-full bg-sky-500" />
              <span> {cards?.length} task(s)</span>
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

function NewBoardButton({ userId }: { userId: string }) {
  const mutation = useMutation(api.board.createBoardTemplate)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  })

  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  function onSubmit(values: z.infer<typeof formSchema>) {
    mutation({
      title: values.title,
      authorId: userId,
    }).then((result) => {
      if (result) {
        setOpen(false)
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
          {/* <DialogDescription>Add your new task to {title}</DialogDescription> */}
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

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  )
}
function KanbanBoard({}: Props) {
  // const createAdventure = useMutation(api.board.createAdventure)
  const boards = useQuery(api.board.get)
  const { data: session } = useSession()
  if (!session) redirect("/")
  return !boards ? null : (
    <>
      {" "}
      <PageHeader className="page-header pb-8">
        <PageHeaderHeading className="">Project lists</PageHeaderHeading>
        <PageHeaderDescription>
          <NewBoardButton userId={session.user.id} />
        </PageHeaderDescription>
      </PageHeader>
      <div className=" items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-3">
        {boards.map((board) => (
          <BoardCard board={board} key={board._id} />
        ))}
      </div>
    </>
  )
}

export default KanbanBoard
