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
      "My personal portfolio website, where I explore and experiment with new technologies",
    siteURL: "https://mike-hoang-dev.vercel.app/",
    sourceURL: "https://github.com/mikah13/profile",
    imageURL: "/images/personal.png",
    imageAltText: "Mike Hoang Dev Thumbnail",
    stack: [
      {
        label: "NextJS",
      },
      {
        label: "TypeScript",
      },
      {
        label: "Prisma",
      },
    ],
  },
  {
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "A full-stack application for Ford Archive with over 15,000 images and brochures",
    sourceURL: "",
    siteURL: "https://fordheritagevault.com",
    imageURL: "/images/fordheritagevault.png",
    imageAltText: "Ford Heritage Vault Thumbnail",
    stack: [
      {
        label: "JavaScript",
      },
      {
        label: "Tailwind CSS",
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
        label: "ReactJS",
      },
      {
        label: "NodeJS",
      },
      {
        label: "Material UI",
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
        label: "JavaScript",
      },
      {
        label: "Bootstrap",
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
        label: "ReactJS",
      },
      {
        label: "NodeJS",
      },
    ],
  },
  {
    title: "Skrtble",
    subtitle: "Personal project",
    description:
      "My own adapted implmentation of skribbl.io using Express.js and Web Socket",
    sourceURL: "https://github.com/mikah13/S-k-r-t-b-l-e",
    siteURL: "",
    imageURL: "/images/skrtble.png",
    imageAltText: "Skrtble  Thumbnail",
    stack: [
      {
        label: "ReactJS",
      },
      {
        label: "NodeJS",
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
