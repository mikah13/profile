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
          <div className="mt-2 flex flex-wrap text-center text-2xl">
            {stack.map((Icon, index) => {
              if (Icon.label)
                return (
                  <Badge
                    key={index}
                    variant="default"
                    className="mb-1 mr-2 tracking-tighter"
                  >
                    {Icon.label}
                  </Badge>
                )
              return null
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectDescription
