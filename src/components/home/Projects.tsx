import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import FordThumb from "@/assets/images/fordheritagevault.png";
import { AspectRatio } from "@/components/ui/aspect-ratio";
type Props = {};

const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center  w-full lg:w-3/4 max-w-[1000px]"
    >
      Projects
      <div className="flex flex-row">
        <Card className="w-1/2 min-h-min shadow-xl">
          <CardHeader>
            <CardTitle>Ford Heritage Vault</CardTitle>
            <CardDescription>Work Project</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col w-full ">
            <AspectRatio ratio={16 / 9}>
              <Image
                alt="Picture of the author"
                src={FordThumb}
                className="rounded-md object-cover"
              />
            </AspectRatio>

            <Separator className="my-4 dark:bg-white" />
            <div className="flex flex-row h-3 items-center text-sm space-x-4">
              <a
                href="/"
                className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold text-primary underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
              >
                Source Code
              </a>
              <Separator orientation="vertical" className=" dark:bg-white" />
              <a
                href="/"
                className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold text-primary underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
              >
                Visit Site
              </a>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Projects;
