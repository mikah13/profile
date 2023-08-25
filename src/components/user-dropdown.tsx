"use client";
import { useRouter } from "next/navigation";

import React from "react";
import Image from "next/image";
import type { User } from "next-auth";
import { Role } from "@prisma/client";
import { signOut, signIn } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { FaSignOutAlt } from "react-icons/fa";
const UserDropdown = ({
  user,
}: {
  user?: User & {
    role: Role;
    id: string;
  };
}) => {
  const router = useRouter();
  return user ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-full gap-1 bg-opacity-0 lg:px-2 hover:bg-opacity-2 max-w-48"
        >
          <Image
            className="rounded-full"
            src={user.image ?? ""}
            alt="user avatar"
            height={26}
            width={26}
          />
          <p className="truncate font-bold">{user.name}</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="drop-shadow-xl">
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={(_) => {
            router.push("/dashboard", { scroll: false });
          }}
        >
          Dashboard
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="text-red-500 focus:text-white focus:bg-destructive hover:cursor-pointer"
          onClick={() => signOut()}
        >
          <FaSignOutAlt className="w-4 h-4 mr-2" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <Button
      variant="outline"
      className="font-bold"
      onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
    >
      Sign in
    </Button>
  );
};

export default UserDropdown;
