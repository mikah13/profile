import React from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { getCurrentUser } from "@/lib/session"
import UserDropdown from "@/components/user-dropdown"

type Props = {}

const DashboardHeader = async (props: Props) => {
  const user = await getCurrentUser()

  return (
    <div className="supports-backdrop-blur:bg-white/60 sticky top-0 z-40 w-full flex-none bg-white/95 text-zinc-900 backdrop-blur transition-colors duration-500 dark:border-zinc-50/[0.06] dark:bg-transparent dark:text-white lg:z-50 lg:border-b lg:border-zinc-900/10">
      <div className="max-w-8xl mx-auto">
        <div className="mx-4 flex border-b border-zinc-900/10 py-4 dark:border-zinc-300/10 lg:mx-0 lg:border-0 lg:px-8">
          <div className=" relative flex items-center px-2 py-1 ">
            Dashboard
          </div>

          <div className="relative ml-auto hidden items-center lg:flex">
            <nav className="flex space-x-8 ">
              <ModeToggle />
              <UserDropdown user={user} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader
