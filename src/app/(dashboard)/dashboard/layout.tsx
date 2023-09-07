import Appbar from "@/components/appbar"
import DashboardFooter from "./_components/Footer"
import DashboardHeader from "./_components/Header"
import DashboardSidebar from "./_components/SideBar"
import { DASHBOARD_SIDEBAR_LINKS } from "@/lib/nav-links"
import { getCurrentUser } from "@/lib/session"
import { redirect } from "next/navigation"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getCurrentUser()
  if (!user) redirect("/")
  return (
    <section>
      <Appbar dashboard={true} />
      <div className="p- container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)]  lg:grid-cols-[240px_minmax(0,1fr)] ">
        <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardSidebar links={DASHBOARD_SIDEBAR_LINKS} />
        </div>
        <main className="flex w-full flex-col overflow-hidden p-2 ">
          {children}
        </main>
      </div>
      <DashboardFooter />
    </section>
  )
}
