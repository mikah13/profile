import React from 'react'
import { cn, formatDate } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

type Props = {}

const BlogFooter = (props: Props) => {
  return (
    <div className="flex justify-center py-6 lg:py-10">
      <Link href="/blog" className={cn(buttonVariants({ variant: "ghost" }))}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
    </div>
  )
}

export default BlogFooter