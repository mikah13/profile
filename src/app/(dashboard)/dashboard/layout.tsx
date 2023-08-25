import Appbar from "@/components/appbar";
import DashboardFooter from "./_components/Footer";
import DashboardHeader from "./_components/Header";
import DashboardSidebar from "./_components/SideBar";
import { DASHBOARD_SIDEBAR_LINKS } from "@/lib/nav-links";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Appbar dashboard={true} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] p-0 md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <div className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <DashboardSidebar links={DASHBOARD_SIDEBAR_LINKS} />
        </div>
        <main className="flex w-full flex-col overflow-hidden">{children}
        </main>
      </div>
      <DashboardFooter />
    </section >
  );
}
