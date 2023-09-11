import { query } from "./_generated/server"
import { v } from "convex/values"

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
