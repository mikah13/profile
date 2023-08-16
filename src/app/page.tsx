import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import IntroCard from "@/components/home/IntroCard";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="flex font-mono min-h-screen flex-col items-center justify-start px-4 pt-0 md:px-12 lg:px-24 antialiased text-slate-500 dark:text-slate-400 ">
      <IntroCard />

      <Projects />
    </main>
  );
}
