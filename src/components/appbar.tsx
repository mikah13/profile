import Link from "next/link";
import React, { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import { scrollTo } from "@/lib/utils";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import UserDropdown from "./user-dropdown";
import { getCurrentUser } from "@/lib/session";
type Props = {};

const Appbar = async (props: Props) => {
  const user = await getCurrentUser();
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
                className="flex items-center font-bold dark:text-white hover:underline"
              >
                About
              </Link>
              <Link
                href="/#projects"
                className="flex items-center font-bold dark:text-white hover:underline"
              >
                Projects
              </Link>
              <Link
                href="/posts"
                className="flex items-center font-bold dark:text-white hover:underline"
              >
                Blog
              </Link>

              <ModeToggle />
              <UserDropdown user={user} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
