import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import { useSession, signIn, signOut } from "next-auth/react";
type Props = {};

const Dashboard = (props: Props) => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
};

export default Dashboard;
