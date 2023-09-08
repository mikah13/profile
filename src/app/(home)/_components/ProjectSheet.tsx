import React from "react"
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
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from 'next/image'
type Props = {
  data: ProjectCardType
}

const ProjectSheet = ({ data }: Props) => {
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
      <SheetHeader className="text-left">
        <SheetTitle>{title}</SheetTitle>
        <SheetDescription>{subtitle}</SheetDescription>
      </SheetHeader>
      <div className="my-4">
        <AspectRatio ratio={16 / 9}>
          <Image
            fill
            alt={imageAltText}
            src={imageURL}
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <p className="mt-4">{description}</p>
      </div>
      <SheetFooter>
        <SheetClose asChild></SheetClose>
      </SheetFooter>
    </div>
  )
}

export default ProjectSheet
