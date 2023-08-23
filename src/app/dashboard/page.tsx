import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useSession, signIn, signOut } from "next-auth/react";
import { getCurrentUser } from "@/lib/session";
type Props = {};

const Dashboard = async (props: Props) => {
  const user = await getCurrentUser();
  console.log(user);
  return <div>Dashboard</div>;
};

export default Dashboard;
