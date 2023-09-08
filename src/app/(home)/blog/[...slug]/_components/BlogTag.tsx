import { Tag } from ".contentlayer/generated"
import React from "react"
import { Badge } from "@/components/ui/badge"
type Props = {
  tags: Tag[]
}

function BlogTag({ tags }: Props) {
  return (
    <div className="my-4 space-y-4">
      <p className="text-xl font-medium">Tags</p>
      <div className="flex flex-wrap space-x-2 ">
        {tags.map((tag, i) => (
          <Badge key={i} className="my-1" variant="secondary">
            {tag.title}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export default BlogTag
