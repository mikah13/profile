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
    <div className=" transition-container bg-introCard bg-50% mx-auto max-w-[450px] animate-[gradient] rounded-xl p-1 hover:shadow-2xl hover:shadow-indigo-500/50">
      <Sheet>
        <SheetTrigger asChild>
          <Card className="h-full min-h-min w-full cursor-pointer bg-zinc-100  shadow-2xl dark:bg-black ">
            <CardHeader>
              <CardTitle className="underline">{title}</CardTitle>
              <CardDescription>{subtitle}</CardDescription>
            </CardHeader>
            <CardContent className="flex w-full flex-col pb-4">
              <ProjectDescription data={props.data} />
            </CardContent>
          </Card>
        </SheetTrigger>

        <SheetContent>
          <ProjectSheet data={props.data} />
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ProjectCard
