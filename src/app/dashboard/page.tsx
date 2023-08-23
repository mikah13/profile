import React from "react";
import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
type Props = {};

const Dashboard = ({ Component, pageProps }: AppProps) => {
  return (
    // <SessionProvider session={pageProps.session}>
    //     Dashboard
    //   <Component {...pageProps} />
    // </SessionProvider>
    <>Dashboard</>
  );
};

export default Dashboard;
