import Link from "next/link"
import React, { useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import UserDropdown from "./user-dropdown"
import { getCurrentUser } from "@/lib/session"
import { AppBarLink } from "@/lib/types"
import NotificationBox from "@/components/notification-box"

const Appbar = async ({
  dashboard = false,
  links,
}: {
  dashboard?: boolean
  links?: AppBarLink[]
}) => {
  const user = await getCurrentUser()
  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 text-zinc-900 backdrop-blur transition-colors duration-500 dark:border-zinc-50/[0.06] dark:bg-transparent dark:text-white lg:z-50 lg:border-b lg:border-zinc-900/10">
      <div className="max-w-8xl mx-auto">
        <div className="mx-4 flex border-b border-zinc-900/10 py-4 dark:border-zinc-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className="rubik-font relative flex items-center rounded px-2 py-1">
            <Link href="/">
              <Image width={40} height={40} src="/images/logo.png" alt="logo" />
              {/* mike-hoang-dev */}
            </Link>
          </div>

          <div className="relative ml-auto hidden items-center lg:flex">
            <nav className="flex space-x-8 ">
              {links &&
                links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.href}
                      className="animated-link relative flex items-center font-bold after:bg-violet-700 dark:text-white dark:after:bg-violet-400"
                    >
                      {link.label}
                    </Link>
                  )
                })}

              <div className="flex flex-row space-x-2">
                {dashboard && <NotificationBox />}
                <ModeToggle />
              </div>

              <UserDropdown user={user} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar
