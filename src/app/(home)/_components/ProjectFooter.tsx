import { Separator } from "@/components/ui/separator"
import { ProjectCardType } from "@/lib/types"
import React from "react"
import { cn } from "@/lib/utils"
import { ExternalLink, Code2 } from "lucide-react"
type Props = {
  data: ProjectCardType
}
const ProjectFooter = ({ data }: Props) => {
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
    <div className="w-full">
      <Separator className="my-2 dark:bg-white" />
      <div className="flex h-4 flex-row items-center justify-evenly space-x-4 text-sm ">
        <a
          href={sourceURL === "" ? "#" : sourceURL}
          target="_blank"
          className={cn(
            "flex items-center gap-x-2 font-bold underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500",
            sourceURL !== ""
              ? "text-violet-700 dark:text-purple-300 "
              : "pointer-events-none text-stone-300 dark:text-stone-700"
          )}
        >
          <Code2 className="h-4 w-4" /> Source Code
        </a>
        <Separator orientation="vertical" className=" h-full dark:bg-white" />
        <a
          href={siteURL === "" ? "#" : siteURL}
          target="_blank"
          className={cn(
            "flex items-center gap-x-2 font-bold underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500",
            siteURL !== ""
              ? "text-violet-700 dark:text-purple-300 "
              : "pointer-events-none text-stone-300 dark:text-stone-700"
          )}
        >
          <ExternalLink className="h-4 w-4" />
          Visit Site
        </a>
      </div>
      <Separator className="my-2 dark:bg-white" />
    </div>
  )
}

export default ProjectFooter
