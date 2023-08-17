import React from "react";
import ProjectCard from "./ProjectCard";

import { SiJavascript, SiTailwindcss } from "react-icons/si";

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
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "An all-new online database from Ford Archive with over 15,000 images and brochures.",
    sourceURL: "",
    siteURL: "fordheritagevault.com",
    imageURL: "/images/fordheritagevault.png",
    imageAltText: "Ford Heritage Vault Thumbnail",
  },
  {
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "An all-new online database from Ford Archive with over 15,000 images and brochures",
    sourceURL: "",
    siteURL: "fordheritagevault.com",
    imageURL: "/images/fordheritagevault.png",
    imageAltText: "Ford Heritage Vault Thumbnail",
  },
  {
    title: "Ford Heritage Vault",
    subtitle: "Work project",
    description:
      "An all-new online database from Ford Archive with over 15,000 images and brochures",
    sourceURL: "",
    siteURL: "fordheritagevault.com",
    imageURL: "/images/fordheritagevault.png",
    imageAltText: "Ford Heritage Vault Thumbnail",
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
