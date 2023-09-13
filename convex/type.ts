import { v } from "convex/values"
export const Boards = {
  title: v.string(),
  status: v.optional(
    v.union(
      v.literal("Planning"),
      v.literal("In Progress"),
      v.literal("Paused"),
      v.literal("Done"),
      v.literal("Cancelled")
    )
  ),
  priority: v.optional(
    v.union(v.literal("Low"), v.literal("Medium"), v.literal("High"))
  ),
  startDate: v.optional(v.string()),
  endDate: v.optional(v.string()),
  authorId: v.string(),
  description: v.optional(v.string()),
  bookmark: v.optional(v.boolean()),
  comment: v.optional(v.id("comments")),
}

export const Columns = {
  title: v.union(
    v.literal("To Do"),
    v.literal("In Progress"),
    v.literal("In Review"),
    v.literal("Done"),
    v.literal("Archived")
  ),
  description: v.optional(v.string()),
  position: v.number(),
  boardId: v.id("boards"),
}

export const Notifications = {
  userId: v.string(),
  title: v.string(),
  description: v.string(),
  read: v.boolean(),
  cta: v.string(),
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
