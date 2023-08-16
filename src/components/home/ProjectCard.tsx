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
import { SiJavascript, SiTailwindcss } from "react-icons/si";
type Props = {
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
      component: React.FC;
    };
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
  return (
    <Card className="w-full min-h-min shadow-xl cursor-pointer bg-slate-100 dark:bg-black">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col w-full ">
        <AspectRatio ratio={16 / 9}>
          <Image
            fill
            alt={imageAltText}
            src={imageURL}
            className="rounded-md object-cover"
          />
        </AspectRatio>
        <div>
          <p>{description}</p>
        </div>
        {stack && (
          <div className="flex space-x-2 text-4xl my-4">
            <SiJavascript className="text-[#F7DF1E]" />
            <SiTailwindcss className="text-[#06B6D4]" />
          </div>
        )}

        <Separator className="my-4 dark:bg-white" />

        <div className="flex flex-row h-3 items-center justify-evenly text-sm space-x-4">
          <a
            href={sourceURL}
            target="_blank"
            className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold text-primary underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
          >
            Source Code
          </a>
          <Separator orientation="vertical" className=" dark:bg-white" />
          <a
            href={siteURL}
            target="_blank"
            className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold text-primary underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
          >
            Visit Site
          </a>
        </div>
        <Separator className="mt-4 dark:bg-white" />
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
