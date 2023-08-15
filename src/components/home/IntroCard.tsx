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
type Props = {};

const IntroCard = (props: Props) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex ">
      <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full">
        <h1 className=" prose prose-slate scroll-m-20 text-4xl lg:text-5xl font-extrabold tracking-tight ">
          Hello, I am{" "}
          <span className="text-slate-900 dark:text-white"> Mike Hoang </span>
          👋
        </h1>
        <h2 className="scroll-m-20  pb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 mt-4">
          Software Developer
        </h2>

        <p className="mt-5 text-base font-medium tracking-tight">
          With several years of experience in building large-scale applications,
          I always strive to make the complex seem effortless and the
          extraordinary feel intuitive.
        </p>
        <Separator className="my-4 dark:bg-white" />
        <div className="flex h-5 items-center space-x-4 text-sm">
          <div>Blog</div>
          <Separator orientation="vertical" className="dark:bg-white" />
          <div>Docs</div>
          <Separator orientation="vertical" className="dark:bg-white"/>
          <div>Source</div>
        </div>
      </div>
    </div>
  );
};

export default IntroCard;
