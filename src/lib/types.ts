import { Icons } from "@/lib/icons"

export type Post = {
  id: string
  title: string
  content: string
  published: boolean
  createdAt: Date
  updatedAt: Date
  likes: number
  authorId: string
  thumbnail: string | null
}

export type Category = {
  id: number
  name: string
  posts: Post[]
}

export type User = {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
  posts: Post[]
}

export type AppBarLink = {
  href: string
  label: string
}

export type DashboardSidebarLink = {
  icon?: keyof typeof Icons
  href: string
  label: string
}
