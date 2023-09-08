import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { HiExternalLink, HiCode } from "react-icons/hi"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ProjectCardType } from "@/lib/types"
import ProjectDescription from "./ProjectDescription"
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
              {/* <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt={imageAltText}
              src={imageURL}
              className="rounded-md object-cover"
            />
          </AspectRatio> */}
              <ProjectDescription data={props.data} />
            </CardContent>
          </Card>
        </SheetTrigger>

        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              {/* Make changes to your profile here. Click save when you're done. */}
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Save changes</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default ProjectCard
