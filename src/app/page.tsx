import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import AboutMe from "./_components/AboutMe";
import Projects from "./_components/Projects";
import prisma from "../lib/prisma";
export default async function Home({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  return (
    <main className="flex font-mono min-h-screen flex-col items-center justify-start px-4 pt-0 md:px-12 lg:px-24 antialiase">
      <AboutMe />
      <Projects />
    </main>
  );
}
