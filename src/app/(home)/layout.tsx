import { useEffect } from "react"
import Appbar from "@/components/appbar"
import Footer from "@/components/footer"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#a0a0a09_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]">
      <Appbar />
      {children}
      <Footer />
    </section>
  )
}
