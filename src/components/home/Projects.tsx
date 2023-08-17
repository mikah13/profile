import React from "react";
import ProjectCard from "./ProjectCard";

import {
  SiJavascript,
  SiTailwindcss,
  SiReact,
  SiMui,
  SiNodedotjs,
  SiBootstrap,
} from "react-icons/si";

type Props = {};
const PROJECTS_ARRAY = [
  {
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "An all-new online database from Ford Archive with over 15,000 images and brochures",
    sourceURL: "",
    siteURL: "fordheritagevault.com",
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
    title: "Surrey Online Heritage Search",
    subtitle: "Work project",
    description:
      "An online database for City of Surrey with a Content Management System",
    sourceURL: "",
    siteURL: "surrey.minisisinc.com",
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
      "An online database search and management for the Archives of Ontario",
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
    sourceURL: "",
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
];
const Projects = (props: Props) => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center  w-full  max-w-[1500px]"
    >
      <h2 className="scroll-m-20  mb-2 text-2xl font-semibold tracking-tight transition-colors  mt-[100px] text-center">
        Projects
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-24">
        {PROJECTS_ARRAY.map((project, i) => (
          <ProjectCard data={project} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
