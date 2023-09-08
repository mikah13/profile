import React from 'react'
import { Separator } from "@/components/ui/separator"
import { HiExternalLink, HiCode } from "react-icons/hi"
import { ProjectCardType } from '@/lib/types'
import { cn } from "@/lib/utils"

type Props = {
    data:ProjectCardType
}

function ProjectDescription({data}: Props) {
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
      {" "}
      <div className="">
        {stack && (
          <div className="my-1 flex space-x-2 text-2xl">
            {stack.map((Icon, index) => {
              return <Icon.component className={cn(Icon.color)} key={index} />
            })}
          </div>
        )}
        <p className="mt-2">{description}</p>
      </div>
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
            <HiCode /> Source Code
          </a>
          <Separator orientation="vertical" className=" h-full dark:bg-white" />
          <a
            href={siteURL}
            target="_blank"
            className="flex items-center gap-x-2 font-bold text-violet-700 underline  underline-offset-4 hover:text-pink-500 dark:text-purple-300 dark:hover:text-pink-500"
          >
            <HiExternalLink />
            Visit Site
          </a>
        </div>
        <Separator className="my-2 dark:bg-white" />
      </div>
    </div>
  )
}

export default ProjectDescription