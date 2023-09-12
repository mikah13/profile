import Appbar from "@/components/appbar"
import DashboardFooter from "./dashboard/_components/Footer"
import DashboardHeader from "./dashboard/_components/Header"
import DashboardSidebar from "./dashboard/_components/SideBar"
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
    <section className="overflow-x-hidden">
      <Appbar dashboard={true} />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="fixed inset-0 right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block">
          <DashboardSidebar links={DASHBOARD_SIDEBAR_LINKS} />
        </div>
        <main className="flex flex-col lg:pl-[19.5rem]">{children}</main>
      </div>
      <DashboardFooter />
    </section>
  )
}
