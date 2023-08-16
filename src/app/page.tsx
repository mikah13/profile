import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import IntroCard from "@/components/home/IntroCard";
import Projects from "@/components/home/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 md:p-12 lg:p-24 antialiased text-slate-500 dark:text-slate-400 ">
      <IntroCard />
      <Projects />
    </main>
  );
}
