"use client"
import React from "react"
import { Bell, BellDotIcon } from "lucide-react"
import { Button } from "./ui/button"
import { useQuery } from "convex/react"
import { api } from "@/../convex/_generated/api"
type Props = {}

function NotificationBox({}: Props) {
  const notifications = useQuery(api.notification.get)

  return (
    <div>
      <Button variant="outline" size="icon">
        <Bell className="h-[1.2rem] w-[1.2rem] text-violet-700 dark:text-white" />
      </Button>
    </div>
  )
}

export default NotificationBox
