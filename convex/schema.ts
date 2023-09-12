import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  boards: defineTable({
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
    prority: v.optional(
      v.union(v.literal("low"), v.literal("medium"), v.literal("high"))
    ),
    startDate: v.optional(v.string()),
    endDate: v.optional(v.string()),
    authorId: v.string(),
    description: v.optional(v.string()),
    bookmark: v.optional(v.boolean()),
    comment: v.optional(v.id("comments")),
  }),
  columns: defineTable({
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
  }),
  tasks: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    columnId: v.id("columns"),
    boardId: v.id("boards"),
    tags: v.optional(v.array(v.id("tags"))),
    prority: v.optional(
      v.union(v.literal("low"), v.literal("medium"), v.literal("high"))
    ),
    dueDate: v.optional(v.string()),
    assignee: v.optional(v.array(v.string())),
    comments: v.optional(v.array(v.id("comments"))),
  }),
  tags: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
  }),
  comments: defineTable({
    authorId: v.string(),
    content: v.string(),
  }),
})
