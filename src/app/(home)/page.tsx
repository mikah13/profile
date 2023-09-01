'use client'
import Image from "next/image";
import { ModeToggle } from "@/components/mode-toggle";
import AboutMe from "./_components/AboutMe";
import Projects from "./_components/Projects";
import React, { useEffect } from "react";
export default function Home() {
  return (
    <main className="flex font-mono min-h-screen flex-col items-center justify-start px-4 pt-0 md:px-12 lg:px-24 antialiase">
      <AboutMe />
      <Projects />
    </main>
  );
}
