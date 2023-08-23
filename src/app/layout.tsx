import "./globals.css";
import { useEffect } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Appbar from "@/components/appbar";
import ScrollProgress from "@/components/scroll-progress";
import Footer from "@/components/footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mike Hoang",
  description: "Mike Hoang - Software Developer",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400">
            <ScrollProgress />
            <Appbar />
            <div>{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
