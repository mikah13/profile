"use client"

import { Post } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"
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
export const columns: ColumnDef<Post>[] = [
    {
        accessorKey: "title",
        header: () => <div className="">Title</div>,
        cell: ({ row }) => {
            return <div className=" font-bold">{row.getValue('title')}</div>
        },
    },
    {
        accessorKey: "content",
        header: "Content",
    },
    {
        accessorKey: "likes",
        header: "Likes",
    },
    {
        accessorKey: "published",
        header: "Status",
        cell: ({ row }) => {
            let isPublished = row.getValue('published');
            
            return <div className=" font-bold">{row.getValue('published') }</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

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
