import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const getCardFromColumn = query({
  args: {
    columnId: v.string(),
  },
  handler: async (ctx, args) => {
    const cards = await ctx.db
      .query("cards")
      .filter((q) => q.eq(q.field("columnId"), args.columnId))
      .collect()

    return cards
  },
})
export const getCardFromBoard = query({
  args: {
    boardId: v.string(),
  },
  handler: async (ctx, args) => {
    const cards = await ctx.db
      .query("cards")
      .filter((q) => q.eq(q.field("boardId"), args.boardId))
      .collect()

    return cards
  },
})
export const create = mutation({
  args: {
    title: v.string(),
    description: v.optional(v.string()),
    position: v.number(),
    columnId: v.id("columns"),
    boardId: v.id("boards"),
  },
  handler: async (ctx, args) => {
    const card = await ctx.db.insert("cards", {
      title: args.title,
      description: args.description,
      position: args.position,
      columnId: args.columnId,
      boardId: args.boardId,
    })
    // do something with `taskId`
    return ctx.db.get(card)
  },
})
