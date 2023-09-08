import React from "react"
import ProjectCard from "./ProjectCard"

import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiMui,
  SiNodedotjs,
  SiBootstrap,
  SiTypescript,
  SiNextdotjs,
  SiPrisma,
  SiPlanetscale,
} from "react-icons/si"

type Props = {}
const PROJECTS_ARRAY = [
  {
    title: "mike-hoang-dev",
    subtitle: "Personal project",
    description:
      "My personal portfolio website,where I explore and experiment with cutting-edge technologies",
    siteURL: "https://mike-hoang-dev.vercel.app/",
    sourceURL: "https://github.com/mikah13/profile",
    imageURL: "/images/personal.png",
    imageAltText: "Mike Hoang Dev Thumbnail",
    stack: [
      {
        color: "text-[#3178C6]",
        component: SiTypescript,
      },
      {
        color: "text-[#000000] dark:text-white",
        component: SiNextdotjs,
      },
      {
        color: "text-[#06B6D4]",
        component: SiTailwindcss,
      },
      {
        color: "text-[#2D3748] dark:text-[#7b93bd]",
        component: SiPrisma,
      },
      {
        color: "text-[#000000] dark:text-white",
        component: SiPlanetscale,
      },
    ],
  },
  {
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "A full-stack web application for Ford Archive with over 15,000 images and brochures",
    sourceURL: "",
    siteURL: "https://fordheritagevault.com",
    imageURL: "/images/fordheritagevault.png",
    imageAltText: "Ford Heritage Vault Thumbnail",
    stack: [
      {
        color: "text-[#F7DF1E]",
        component: SiJavascript,
      },
      {
        color: "text-[#06B6D4]",
        component: SiTailwindcss,
      },
    ],
  },
  {
    title: "Surrey Online Search",
    subtitle: "Work project",
    description:
      "A full-stack web application and Content Management System for City of Surrey",
    sourceURL: "",
    siteURL: "https://surrey.minisisinc.com",
    imageURL: "/images/surrey.png",
    imageAltText: "Surrey Online Heritage Search Thumbnail",
    stack: [
      {
        color: "text-[#61DAFB]",
        component: SiReact,
      },
      {
        color: "text-[#339933]",
        component: SiNodedotjs,
      },
      {
        color: "text-[#007FFF]",
        component: SiMui,
      },
    ],
  },
  {
    title: "Archives of Ontario",
    subtitle: "Work project",
    description:
      "A front-end web application and database management for the Archives of Ontario",
    sourceURL: "",
    siteURL: "https://aims.archives.gov.on.ca/",
    imageURL: "/images/archivesontario.png",
    imageAltText: "Archives of Ontario Thumbnail",
    stack: [
      {
        color: "text-[#F7DF1E]",
        component: SiJavascript,
      },
      {
        color: "text-[#7952B3]",
        component: SiBootstrap,
      },
    ],
  },
  {
    title: "Language Picker",
    subtitle: "Personal project",
    description:
      "A side project to help people to decide which programming language to learn",
    sourceURL: "https://github.com/mikah13/language-picker",
    siteURL: "https://mikah13.github.io/language-picker/",
    imageURL: "/images/languagepicker.png",
    imageAltText: "Language Picker Thumbnail",
    stack: [
      {
        color: "text-[#61DAFB]",
        component: SiReact,
      },
      {
        color: "text-[#339933]",
        component: SiNodedotjs,
      },
    ],
  },
]
const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="relative flex  w-full  max-w-[1500px]  flex-col "
    >
      <h2 className="my-8 text-center text-5xl font-bold tracking-tight transition-colors">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS_ARRAY.map((project, i) => (
          <ProjectCard data={project} index={i} key={i} />
        ))}
      </div>
    </section>
  )
}

export default Projects
