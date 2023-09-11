"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProjectCardType } from "@/lib/types"
import ProjectDescription from "./ProjectDescription"
import ProjectSheet from "./ProjectSheet"
import ProjectFooter from "./ProjectFooter"
type Props = {
  index: number
  data: ProjectCardType
}

const ProjectCard = (props: Props) => {
  const {
    title,
    subtitle,
    description,
    sourceURL,
    siteURL,
    imageURL = "",
    imageAltText,
    stack,
  } = props.data
  const { index } = props
  return (
    <div className=" transition-container bg-introCard bg-50% relative mx-auto w-full max-w-[400px] animate-[gradient] rounded-xl p-[0.3rem] shadow-md shadow-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/50">
      <Sheet>
        <Card className="h-full min-h-min w-full cursor-pointer bg-zinc-100  shadow-2xl dark:bg-black ">
          <SheetTrigger className="w-full text-left">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xl underline underline-offset-1">
                {title}
              </CardTitle>
              <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
          </SheetTrigger>
          <CardContent className="flex w-full flex-col px-4">
            <ProjectDescription data={props.data} />
          </CardContent>{" "}
          <CardFooter className="p-4 pt-0">
            <ProjectFooter data={props.data} />
          </CardFooter>
        </Card>

        <SheetContent>
          <ProjectSheet data={props.data} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ProjectCard
