"use client"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "./theme-provider"
import ConvexClientProvider from "@/app/ConvexClientProvider"

export function ContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConvexClientProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <SessionProvider>{children}</SessionProvider>
      </ThemeProvider>
    </ConvexClientProvider>
  )
}
