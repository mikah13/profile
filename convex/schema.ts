import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    authorId: v.string(),
    description: v.optional(v.string()),
    bookmark: v.optional(v.boolean()),
  }),
  columns: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    boardId: v.id("boards"),
  }),
  cards: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    columnId: v.id("columns"),
    boardId: v.id("boards"),
  }),
  tags: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
  }),
  comments: defineTable({}),
})
