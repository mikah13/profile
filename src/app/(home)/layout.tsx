import { useEffect } from "react"
import Appbar from "@/components/appbar"
import Footer from "@/components/footer"
import { NAV_BAR_LINKS } from "@/lib/nav-links"

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <Appbar links={NAV_BAR_LINKS} />
        {children}
        <Footer />
      </section>
  )
}
