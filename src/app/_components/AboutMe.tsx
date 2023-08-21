"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { ChevronsDown } from "lucide-react";
import { AiFillLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";
import { Separator } from "@/components/ui/separator";
import { FaLocationDot } from "react-icons/fa6";
import { scrollTo } from "@/lib/utils";
type Props = {};
type LINKS = {
  link: string;
  label: string;
  icon: string;
};
const SOCIAL_MEDIA_LINKS: LINKS[] = [
  {
    link: "https://www.linkedin.com/in/mike-hoang-2907/",
    label: "LinkedIn",
    icon: AiFillLinkedin,
  },
  {
    link: "https://github.com/mikah13",
    label: "GitHub",
    icon: AiOutlineGithub,
  },
  {
    link: "mailto:anhminhhoang13@gmail.com",
    label: "Email",
    icon: AiOutlineMail,
  },
];
const AboutMe = (props: Props) => {
  return (
    <section id="about-me" className="flex flex-col justify-center">
      <div className="drop-shadow-2xl z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl w-full">
          {/* Introduction  */}
          <h1 className="prose prose-slate scroll-m-20 text-4xl lg:text-5xl font-extrabold tracking-tight ">
            Hello, I am
            <span className="text-violet-900 dark:text-white">
              {" "}
              Mike Hoang{" "}
            </span>
            👋
          </h1>
          <h2 className="scroll-m-20  mb-2 text-2xl font-semibold tracking-tight transition-colors first:mt-0 mt-4">
            Software Developer
          </h2>
          <div className="flex items-center text-lg space-x-1">
            <span className="text-rose-500">
              <FaLocationDot />
            </span>
            <p> Vancouver, B.C</p>
          </div>
          <p className="mt-5 text-lg font-medium tracking-tight">
            With several years of experience in building{" "}
            <strong className="font-bold underline">
              large-scale applications
            </strong>
            , I always strive to make the complex seem{" "}
            <strong className="font-bold underline">effortless</strong> and the
            extraordinary feel{" "}
            <strong className="font-bold underline">intuitive</strong>.
          </p>
          {/* Introduction  */}

          {/* Social Media Links */}
          <Separator className="my-4 dark:bg-white" />
          <div className="flex h-3 items-center space-x-4 text-sm">
            {SOCIAL_MEDIA_LINKS.map((link, index) => {
              return (
                <div key={index}>
                  {index !== 0 && (
                    <Separator
                      orientation="vertical"
                      className=" dark:bg-white"
                    />
                  )}
                  <a
                    href={link.link}
                    target="_blank"
                    className="flex items-center gap-x-2 dark:text-purple-300 text-violet-700  font-bold text-primary underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
                  >
                    <span className="text-2xl ">{<link.icon />}</span>
                    <span className="hidden lg:block">{link.label}</span>
                  </a>
                </div>
              );
            })}
          </div>
          {/* Social Media Links */}
        </div>
      </div>
      <div id="cta" className="text-center">
        <Button onClick={(_) => scrollTo("#projects")} className="mt-10 ">
          <ChevronsDown strokeWidth={2.25} className="mr-2 h-4 w-4" />
          <span>Explore !!!</span>
        </Button>
      </div>
    </section>
  );
};

export default AboutMe;
