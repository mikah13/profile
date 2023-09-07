import React from "react"
import { Bell, BellDotIcon } from "lucide-react"
import { Button } from "./ui/button"
type Props = {}

function NotificationBox({}: Props) {
  return (
    <div>
      <Button variant="outline" size="icon">
        <Bell className="h-[1.2rem] w-[1.2rem] text-violet-700 dark:text-white" />
      </Button>
    </div>
  )
}

export default NotificationBox
