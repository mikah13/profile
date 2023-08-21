"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { scrollTo } from "@/lib/utils";
import { Button } from "./ui/button";
import Image from "next/image";
type Props = {};

const Appbar = (props: Props) => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent text-slate-900 dark:text-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
          <div className="rounded relative flex items-center px-2 py-1 bg-violet-400">
            <Link href="/">
              <Image
                width={150}
                height={80}
                src="/images/logo.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="relative hidden lg:flex items-center ml-auto">
            <nav className="flex space-x-8 ">
              <Link
                href="/#about-me"
                className="flex items-center font-bold dark:text-white"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="flex items-center font-bold dark:text-white"
              >
                Projects
              </Link>
              <Link
                href="/posts"
                className="flex items-center font-bold dark:text-white"
              >
                Blog
              </Link>
              <ModeToggle />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
