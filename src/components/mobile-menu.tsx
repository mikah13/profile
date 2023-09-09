"use client"

import React from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import type { User } from "next-auth"
import { Role } from "@prisma/client"
import Image from "next/image"
type Props = {
  user?: User & {
    role: Role
    id: string
  }
}

const MobileMenu = ({ user }: Props) => {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem] text-violet-700 dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-screen">
          <SheetHeader></SheetHeader>

          <SheetDescription>
            {user ? (
              <Button variant="ghost" className="h flex w-full justify-between">
                <div>
                  <p className="truncate font-bold">{user.name}</p>
                  <p>{user.email}</p>
                </div>
                <Image
                  className="rounded-full"
                  src={user.image ?? ""}
                  alt="user avatar"
                  height={26}
                  width={26}
                />
              </Button>
            ) : (
              <Button variant="ghost"> Sign in</Button>
            )}
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
