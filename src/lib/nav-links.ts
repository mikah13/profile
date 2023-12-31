import { AppBarLink, DashboardSidebarLink } from "@/lib/types"

export const NAV_BAR_LINKS: AppBarLink[] = [
  {
    href: "/#about-me",
    label: "About me",
  },
  {
    href: "/#projects",
    label: "Projects",
  },
  {
    href: "/blog",
    label: "Blog",
  },
]

export const DASHBOARD_SIDEBAR_LINKS: DashboardSidebarLink[] = [
  {
    icon: "keyboard",
    href: "/dashboard/",
    label: "Overview",
  },
  {
    icon: "keyboard",
    href: "/boards",
    label: "Kanban Board",
  },
  // {
  //   icon: "keyboard",
  //   href: "/dashboard/posts",
  //   label: "Posts",
  // },
  // {
  //   icon: "keyboard",
  //   href: "/dashboard/drafts",
  //   label: "Drafts",
  // },
  // {
  //   icon: "keyboard",
  //   href: "/dashboard/posts/new",
  //   label: "New Post",
  // },
]
