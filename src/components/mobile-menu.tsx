import React from 'react'
import { Menu } from "lucide-react"
import { Button } from '@/components/ui/button'
type Props = {}

const MobileMenu = (props: Props) => {
  return (
    <div>
      <Button variant="outline" size="icon">
        <Menu className="h-[1.2rem] w-[1.2rem] text-violet-700 dark:text-white" />
      </Button>
    </div>
  )
}

export default MobileMenu