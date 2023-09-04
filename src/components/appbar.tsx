import Link from "next/link";
import React, { useEffect } from "react";
import { ModeToggle } from "./mode-toggle";
import Image from 'next/image';
import UserDropdown from "./user-dropdown";
import { getCurrentUser } from "@/lib/session";
import { AppBarLink } from "@/lib/types";
import NotificationBox from "@/components/notification-box";

const Appbar = async ({ dashboard = false, links }: { dashboard?: boolean, links?: AppBarLink[] }) => {
  const user = await getCurrentUser();
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-zinc-900/10 dark:border-zinc-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent text-zinc-900 dark:text-white">
      <div className="max-w-8xl mx-auto">
        <div className="flex py-4 border-b border-zinc-900/10 lg:px-8 lg:border-0 dark:border-zinc-300/10 mx-4 lg:mx-0">
          <div className="rounded relative flex items-center px-2 py-1 rubik-font">
            <Link href="/">
              <Image
                width={40}
                height={40}
                src="/images/logo.png"
                alt="logo"
              />
              {/* mike-hoang-dev */}
            </Link>
          </div>

          <div className="relative hidden lg:flex items-center ml-auto">
            <nav className="flex space-x-8 ">
              {links && links.map((link, index) => {
                return <Link
                  key={index}
                  href={link.href}
                  className="relative flex items-center font-bold dark:text-white animated-link after:bg-violet-700 dark:after:bg-violet-400"
                >
                  {link.label}
                </Link>
              })}

              <div className="flex flex-row space-x-2">
                {dashboard && <NotificationBox />}
                <ModeToggle />
              </div>


              <UserDropdown user={user} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
