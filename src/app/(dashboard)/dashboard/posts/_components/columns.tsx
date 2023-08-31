"use client"

import { Post } from "@/lib/types"
import { ColumnDef, createTable } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { DataTableColumnHeader } from "./data-table-column-header"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
const MAX_CONTENT_VALUE_LENGTH = 250;
import { CircleIcon } from '@radix-ui/react-icons'
import { getUserById } from "@/app/(home)/posts/actions"
import { formatDate } from "@/lib/utils"
export const columns: ColumnDef<Post>[] = [
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={table.getIsAllPageRowsSelected()}
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
                className="translate-y-[2px]"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
                className="translate-y-[2px]"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
            const title = row.getValue('title') as string;
            const content = row.getValue('content') as string;
            const thumbnail = row.getValue('thumbnail') as string;
            return (
                <div className="flex flex-row space-x-2">
                    <div className="w-24">
                        <AspectRatio ratio={16 / 9} >
                            <Image className="object-cover" alt={title} src={thumbnail !== null ? thumbnail : "https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"} fill />
                        </AspectRatio>
                    </div>

                    <div className="flex flex-col">
                        <span className="max-w-[300px] truncate font-bold">
                            {title}
                        </span>
                        <span className="truncate">
                            {content.substring(0, MAX_CONTENT_VALUE_LENGTH)}
                        </span>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: 'content',
        header: ({ column }) => (
            null
        ),
        cell: ({ row }) => (
            null
        )
    },
    {
        accessorKey: 'thumbnail',
        header: ({ column }) => (
            null
        ),
        cell: ({ row }) => (
            null
        )
    },
    // {
    //     accessorKey: "author",
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title="Author" />
    //     ),
    //     cell: ({ row }) => {
    //         const authorId = row.getValue('authorId') as string;
    //         // const user = await getUserById(authorId)
    //         // console.log(authorId, user)
    //         return (
    //             <div className="flex flex-row space-x-2">
    //                 {/* <div className="w-24">
    //                     <AspectRatio ratio={16 / 9} >
    //                         <Image alt={title} src={
    //                             "https://images.unsplash.com/photo-1468082547792-d37c6c74003e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"} fill />
    //                     </AspectRatio>
    //                 </div> */}

    //                 <div className="flex flex-col">
    //                     <span className=" ">
    //                         {/* {user?.name} */}
    //                     </span>

    //                 </div>
    //             </div>
    //         )
    //     },
    // },
  
    // {
    //     accessorKey: 'createdAt',
    //     header: ({ column }) => (
    //         <DataTableColumnHeader column={column} title="Created" />
    //     ),
    //     cell: ({ row }) => {
    //         const createdAt = row.getValue('createdAt') as Date;
    //         return <div className="flex flex-col">
    //             <span className="">
    //                 {formatDate(createdAt)}
    //             </span>

    //         </div>
    //     }

    // },
    {
        accessorKey: 'updatedAt',
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Updated" />
        ),
        cell: ({ row }) => {
            const createdAt = row.getValue('updatedAt') as Date;
            return <div className="flex flex-col">
                <span className="">
                    {formatDate(createdAt)}
                </span>

            </div>
        }

    },
    {
        accessorKey: "published",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Status" />
        ),
        cell: ({ row }) => {

            const published = row.getValue('published')
            return (
                <div className="flex w-[100px]">
                    <div className="items-center flex flex-row space-x-1"> <span className={`h-2 w-2 rounded-full ${published ? "bg-green-400" : "bg-yellow-400"}`} /> <span>{published ? "Published" : "Draft"}</span></div>
                </div>
            )
        },
        filterFn: (row, id, value) => {
            return value.includes(row.getValue(id))
        },
    }, {
        accessorKey: "likes",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Likes" />
        ),

        cell: ({ row }) => {
            const likes = row.getValue('likes') as number;
            return <div className="flex flex-col">
                <span className="">
                    {likes}
                </span>

            </div>
        }
    },
    {
        id: "actions",
        header: () => (
            <span>Action</span>
        ),
        cell: ({ row }) => {
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Open menu</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Make a copy </DropdownMenuItem>
                        <DropdownMenuItem>Favourite </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Delete </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    },

]
