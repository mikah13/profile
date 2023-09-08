import "./global.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import ScrollProgress from "@/components/scroll-progress"
import { cn } from "@/lib/utils"
import { ContextProvider } from "@/components/context-provider"
import { Toaster } from "@/components/ui/toaster"
import { PageWrapper } from "@/components/page-wrapper"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mike Hoang",
  description: "Mike Hoang - Software Developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen", inter.className)}>
        <ContextProvider>
          {/* <PageWrapper> */}
          <div className=" text-zinc-700  dark:text-zinc-400">
            <ScrollProgress />
            {children}
            <Toaster />
          </div>
          {/* </PageWrapper> */}
        </ContextProvider>
      </body>
    </html>
  )
}
