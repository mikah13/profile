import React from "react"
import { Separator } from "@/components/ui/separator"
import { ProjectCardType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
type Props = {
  data: ProjectCardType
}

function ProjectDescription({ data }: Props) {
  const {
    title,
    subtitle,
    description,
    sourceURL,
    siteURL,
    imageURL = "",
    imageAltText,
    stack,
  } = data
  return (
    <div className="mt-3">
      <p className="mt-2 h-[3.5rem] text-sm tracking-tight">{description}</p>
      <div className="">
        {stack && (
          <div className="mt-2 flex text-center text-2xl flex-wrap">
            {stack.map((Icon, index) => {
              if(Icon.label) return <Badge variant="default" className="mr-2 mb-1 tracking-tighter">{Icon.label}</Badge>
              return null
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDescription
