import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  boards: defineTable({
    title: v.string(),
    authorId: v.string(),
    columnsId: v.optional(v.array(v.id("columns"))),
  }),
  columns: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    boardId: v.id("boards"),
    cardsId: v.optional(v.array(v.id("cards"))),
  }),
  cards: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    columnId: v.id("columns"),
  }),
})
