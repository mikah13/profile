import { useEffect } from "react"
import Appbar from "@/components/appbar"
import Footer from "@/components/footer"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Appbar />
      {children}
      <Footer />
    </section>
  )
}
