import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import AboutMe from "@/components/home/AboutMe";
import Projects from "@/components/home/Projects";
import prisma from '../lib/prisma';
export default async function Home({
  params,
}: {
  params: { user: string };
}): Promise<JSX.Element> {
  return (
    <main className="flex font-mono min-h-screen flex-col items-center justify-start px-4 pt-0 md:px-12 lg:px-24 antialiased text-slate-500 dark:text-slate-400 ">
      <AboutMe />
      <Projects />
    </main>
  );
}
