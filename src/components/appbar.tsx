import Link from "next/link"
import React, { useEffect } from "react"
import { ModeToggle } from "./mode-toggle"
import Image from "next/image"
import UserDropdown from "./user-dropdown"
import { getCurrentUser } from "@/lib/session"
import { AppBarLink } from "@/lib/types"
import NotificationBox from "@/components/notification-box"
import AppbarLink from "./appbar-link"
import { Search } from "lucide-react"
import { NAV_BAR_LINKS } from "@/lib/nav-links"
import MobileMenu from "./mobile-menu"
const Appbar = async ({ dashboard = false }: { dashboard?: boolean }) => {
  const user = await getCurrentUser()
  const links = NAV_BAR_LINKS
  return (
    <div className="supports-backdrop-blur:bg-white/60 fixed top-0 z-40 w-full flex-none bg-white/95 px-4 text-zinc-900 backdrop-blur transition-colors duration-500 dark:border-zinc-50/[0.06] dark:bg-transparent dark:text-white lg:z-50 lg:border-b lg:border-zinc-900/10">
      <div className="max-w-8xl mx-auto">
        <div className=" flex justify-between border-b border-zinc-900/10 py-4 dark:border-zinc-300/10  lg:border-0">
          <div className="relative flex items-center rounded px-2 py-1">
            <Link href="/">
              <Image width={40} height={40} src="/images/logo.png" alt="logo" />
              {/* mike-hoang-dev */}
            </Link>
          </div>

          <div className="relative hidden items-center lg:flex ">
            <nav className="flex space-x-5">
              {!dashboard && (
                <div className="flex justify-between  space-x-5">
                  {links &&
                    links.map((link, index) => {
                      return <AppbarLink link={link} key={index} />
                    })}
                </div>
              )}

              <div className="flex flex-row space-x-2">
                {dashboard && <NotificationBox />}
                <ModeToggle />
                <UserDropdown user={user} />
              </div>
            </nav>
          </div>

          <div className="relative ml-auto  flex items-center lg:hidden">
            <MobileMenu user={user} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appbar
