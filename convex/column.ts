import { query } from "./_generated/server"
import { v } from "convex/values"
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("columns").collect()
  },
})

export const getColumnFromBoard = query({
  args: {
    boardId: v.string(),
  },
  handler: async (ctx, args) => {
    const columns = await ctx.db
      .query("columns")
      .filter((q) => q.eq(q.field("boardId"), args.boardId))
      .collect()

    return columns
  },
})
