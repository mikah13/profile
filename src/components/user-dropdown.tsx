"use client"
import { useRouter } from "next/navigation"

import React from "react"
import Image from "next/image"
import type { User } from "next-auth"
import { Role } from "@prisma/client"
import { signOut, signIn } from "next-auth/react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { Icons } from "@/lib/icons"
const UserDropdown = ({
  user,
}: {
  user?: User & {
    role: Role
    id: string
  }
}) => {
  const router = useRouter()
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="hover:bg-opacity-2 max-w-48 flex h-full gap-1 bg-opacity-0 lg:px-2"
        >
          <Image
            className="rounded-full"
            src={user.image ?? ""}
            alt="user avatar"
            height={26}
            width={26}
          />
          {/* <p className="truncate font-bold">{user.name}</p> */}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="drop-shadow-xl">
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={(_) => {
            router.push("/", { scroll: false })
          }}
        >
          <Icons.home className="mr-2 h-4 w-4" /> Homepage
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={(_) => {
            router.push("/dashboard", { scroll: false })
          }}
        >
          <Icons.dashboard className="mr-2 h-4 w-4" /> Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 hover:cursor-pointer focus:bg-destructive focus:text-white"
          onClick={() => signOut()}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      variant="outline"
      className="font-bold"
      onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
    >
      Sign in
    </Button>
  )
}

export default UserDropdown
