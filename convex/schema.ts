import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"
import { Boards, Columns, Notifications } from "./type"

export default defineSchema({
  boards: defineTable(Boards),
  columns: defineTable(Columns),
  tasks: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    columnId: v.id("columns"),
    boardId: v.id("boards"),
    tags: v.optional(v.array(v.id("tags"))),
    prority: v.optional(
      v.union(v.literal("Low"), v.literal("Medium"), v.literal("High"))
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
  notifications: defineTable(Notifications),
})
