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
import { Separator } from "@radix-ui/react-separator"
import Link from "next/link"
import { NAV_BAR_LINKS } from "@/lib/nav-links"
import { signIn, signOut } from "next-auth/react"
type Props = {
  user?: User & {
    role: Role
    id: string
  }
}

const MobileMenu = ({ user }: Props) => {
  const links = NAV_BAR_LINKS
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-[1.2rem] w-[1.2rem] text-violet-700 dark:text-white" />
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom" className="h-screen">
          <SheetHeader>
            <Link href="/">
              <Image width={40} height={40} src="/images/logo.png" alt="logo" />
              {/* mike-hoang-dev */}
            </Link>
          </SheetHeader>

          <SheetDescription>
            {user ? (
              <div className="h flex w-full justify-between px-0 py-2">
                <div className="text-left">
                  <p className="truncate font-bold">{user.name}</p>
                  <p>{user.email}</p>
                </div>
                <Image
                  className="rounded-full"
                  src={user.image ?? ""}
                  alt="user avatar"
                  objectFit="contain"
                />
              </div>
            ) : null}
            <Separator />
            <div className="flex flex-col space-y-3">
              {links &&
                links.map((link, index) => {
                  return (
                    <React.Fragment key={index}>
                      <Link href={link.href}>{link.label}</Link>
                      <Separator />
                    </React.Fragment>
                  )
                })}
            </div>
            <Button
              className="w-full"
              variant="secondary"
              onClick={() => (user ? signOut() : signIn())}
            >
              {user ? "Logout" : "Sign in"}
            </Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileMenu
