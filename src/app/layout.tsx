import "./global.css"
import type { Metadata } from "next"
import { Inter, Source_Code_Pro } from "next/font/google"
import ScrollProgress from "@/components/scroll-progress"
import { cn } from "@/lib/utils"
import { ContextProvider } from "@/components/context-provider"
import { Toaster } from "@/components/ui/toaster"
import { PageWrapper } from "@/components/page-wrapper"
const scp = Source_Code_Pro({ subsets: ["latin"] })

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
      <body className={cn("min-h-screen", scp.className)}>
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
