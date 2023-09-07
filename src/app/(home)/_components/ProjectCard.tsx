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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { HiExternalLink, HiCode } from "react-icons/hi";
import { cn } from "@/lib/utils";
type Props = {
  index: number;
  data: {
    title: string;
    subtitle: string;
    description: string;
    sourceURL: string;
    siteURL: string;
    imageURL: string;
    imageAltText: string;
    stack?: {
      color: string;
      component: any;
    }[];
  };
};

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
  } = props.data;
  const { index } = props;
  return (
    <div className=" transition-container bg-introCard bg-50% mx-auto max-w-[450px] animate-[gradient] rounded-xl p-1 hover:shadow-2xl hover:shadow-indigo-500/50">
      <Card className="h-full min-h-min w-full cursor-pointer bg-zinc-100  shadow-2xl dark:bg-black ">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          {/* <CardDescription>{subtitle}</CardDescription> */}
        </CardHeader>
        <CardContent className="flex w-full flex-col pb-0">
          <AspectRatio ratio={16 / 9}>
            <Image
              fill
              alt={imageAltText}
              src={imageURL}
              className="rounded-md object-cover"
            />
          </AspectRatio>

          <div>
            <Separator className="my-2 dark:bg-white" />
            <div className="flex h-4 flex-row items-center justify-evenly space-x-4 text-sm ">
              <a
                href={sourceURL === "" ? "#" : sourceURL}
                target="_blank"
                className={cn(
                  "flex items-center gap-x-2 font-bold underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500",
                  sourceURL !== ""
                    ? "text-violet-700 dark:text-purple-300 "
                    : "pointer-events-none text-stone-300 dark:text-stone-700",
                )}
              >
                <HiCode /> Source Code
              </a>
              <Separator
                orientation="vertical"
                className=" h-full dark:bg-white"
              />
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
        </CardContent>
        <CardFooter>
          <div className="my-2">
            {stack && (
              <div className="my-1 flex space-x-2 text-2xl">
                {stack.map((Icon, index) => {
                  return (
                    <>
                      <Icon.component className={cn(Icon.color)} key={index} />
                    </>
                  );
                })}
              </div>
            )}
            <p className="mt-2">{description}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
