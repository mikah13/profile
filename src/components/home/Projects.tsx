import React from "react";
import ProjectCard from "./ProjectCard";
import FordThumb from "@/assets/images/fordheritagevault.png";

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
      className="flex flex-col justify-center  w-full lg:w-3/4 max-w-[1000px]"
    >
      Projects
      <div className=" grid grid-cols-2 gap-4">
        {PROJECTS_ARRAY.map((project, i) => (
          <ProjectCard data={project} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
