import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/scroll-progress";
import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";

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
      <body className={cn("min-h-screen", inter.className)}>

        <ContextProvider>
          <div className="bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-400">
            <ScrollProgress />
            {children}
          </div>

        </ContextProvider>
      </body>
    </html>
  );
}
