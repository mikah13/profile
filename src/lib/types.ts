import { Icons } from "@/lib/icons"

export type ProjectCardType = {
  title: string
  subtitle: string
  description: string
  sourceURL: string
  siteURL: string
  imageURL: string
  imageAltText: string
  stack?: {
    label?: string
  }[]
}
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

export enum ColumnTitle {
  todo = "To Do",
  progress = "In Progress",
  review = "In Review",
  done = "Done",
  archived = "Archived",
}

export enum BoardStatus {
  planning = "Planning",
  progress = "In Progress",
  paused = "Paused",
  done = "Done",
  cancelled = "Cancelled",
}
export enum Priority {
  low = "Low",
  medium = "Medium",
  high = "High",
}
