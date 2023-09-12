"use client"
import { Button } from "@/components/ui/button"
import { Icons } from "@/lib/icons"
import { DashboardSidebarLink } from "@/lib/types"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const DashboardSidebar = ({ links }: { links: DashboardSidebarLink[] }) => {
  const pathname = usePathname()

  const isActivePath = (path: string) => {
    return pathname.endsWith(path)
  }

  return (
    <div className="space-y-4 py-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
          Dashboard
        </h2>
        <div className="space-y-1">
          {links.map((link, index) => {
            return (
              <Link href={link.href} key={index}>
                <Button
                  variant={isActivePath(link.href) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {link.label}
                </Button>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default DashboardSidebar
