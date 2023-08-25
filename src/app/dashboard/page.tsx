import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useSession, signIn, signOut } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";
import { redirect } from "next/navigation";
type Props = {};

const Dashboard = async (props: Props) => {
  const user = await getCurrentUser();
  if (!user) redirect("/auth");
  return <div>Dashboard</div>;
};

export default Dashboard;
