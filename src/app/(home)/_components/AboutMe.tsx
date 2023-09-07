"use client"
import React from "react"

import { Button } from "@/components/ui/button"
import { ChevronsDown } from "lucide-react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineMail,
  AiOutlineFileText,
} from "react-icons/ai"
import { Separator } from "@/components/ui/separator"
import { FaLocationDot } from "react-icons/fa6"
import { scrollTo } from "@/lib/utils"
type Props = {}
type LINKS = {
  link: string
  label: string
  icon: string
}
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
  {
    link: "https://silver-arluene-38.tiiny.site/",
    label: "Resume",
    icon: AiOutlineFileText,
  },
]

const AboutMe = (props: Props) => {
  return (
    <section id="about-me" className="relative flex flex-col justify-center">
      <div className="z-10 w-full max-w-5xl items-center justify-between text-sm drop-shadow-2xl lg:flex">
        <div className="w-full rounded-lg bg-white px-6 py-8 shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800">
          {/* Introduction  */}
          <h1 className=" scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl ">
            Hello, I am
            <span className="text-violet-900  dark:text-violet-300">
              {" "}
              Mike Hoang{" "}
            </span>
            👋
          </h1>
          <h2 className="mb-2  mt-4 scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
            Software Developer
          </h2>
          <div className="flex items-center space-x-1 text-lg">
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
                    className="flex items-center gap-x-2 font-bold text-primary  text-violet-700 underline underline-offset-4 hover:text-pink-500 dark:text-purple-300 dark:hover:text-pink-500"
                  >
                    <span className="text-2xl ">{<link.icon />}</span>
                    <span className="hidden lg:block">{link.label}</span>
                  </a>
                </div>
              )
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
  )
}

export default AboutMe
