import React from "react"
import { Separator } from "@/components/ui/separator"
import { HiExternalLink, HiCode } from "react-icons/hi"
import { ProjectCardType } from "@/lib/types"
import { cn } from "@/lib/utils"

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
    <div>
      <div className="">
        {stack && (
          <div className="my-1 flex space-x-2 text-center text-2xl">
            {stack.map((Icon, index) => {
              return <Icon.component className={cn(Icon.color)} key={index} />
            })}
          </div>
        )}
      </div>
      <p className="mt-2 h-[3.5rem] text-sm">{description}</p>
    </div>
  )
}

export default ProjectDescription
