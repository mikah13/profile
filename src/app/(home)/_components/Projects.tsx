import React from "react"
import ProjectCard from "./ProjectCard"

type Props = {}
const PROJECTS_ARRAY = [
  {
    title: "UptoTech",
    subtitle: "Personal project",
    description:
      "A web scraping project to fetch all the latest blog posts from top tech companies",
    siteURL: "https://uptotech.vercel.app/",
    sourceURL: "https://github.com/mikah13/uptotech",
    imageURL: "/images/uptotech.png",
    imageAltText: "UptoTech Thumbnail",
    stack: [
      {
        label: "NextJS",
      },
      {
        label: "NodeJS",
      },
      {
        label: "Cheerio",
      },
    ],
  },
  {
    title: "iConvert",
    subtitle: "Personal project",
    description:
      "A free-to-use tool for converting file formats using Pillow, FastAPI and Next.js",
    sourceURL: "https://github.com/mikah13/file-converter-web",
    siteURL: "https://iconvert.vercel.app/",
    imageURL: "/images/iconvert.png",
    imageAltText: "iConvert Thumbnail",
    stack: [
      {
        label: "FastAPI",
      },
      {
        label: "Next.js",
      },
      {
        label: "Pillow",
      },
    ],
  },
  {
    title: "Tab Booster",
    subtitle: "Personal project",
    description:
      "A Chrome extension categorizes & tracks time on web tab using OpenAI.",
    sourceURL: "https://github.com/mikah13/tabbooster",
    siteURL:
      "https://chromewebstore.google.com/detail/tab-booster/egmmpojeccmdlnbooedjanemdkkbhoeg",
    imageURL: "/images/tabbooster.png",
    imageAltText: "Tab Booster Thumbnail",
    stack: [
      {
        label: "TypeScript",
      },
      {
        label: "OpenAI",
      },
      {
        label: "Chrome API",
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
