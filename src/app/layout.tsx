import "./global.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ScrollProgress from "@/components/scroll-progress";
import { cn } from "@/lib/utils";
import { ContextProvider } from "@/components/context-provider";
import { Toaster } from "@/components/ui/toaster"
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
          <div className="bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-400">
            <ScrollProgress />
            {children}
            <Toaster />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
