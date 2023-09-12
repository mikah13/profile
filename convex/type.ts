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
