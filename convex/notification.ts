import { mutation, query } from "./_generated/server"
import { v } from "convex/values"
import {  Notifications } from "./type"
export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("notifications").collect()
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

export const createNotification = mutation({
  args: Notifications,
  handler: async (ctx, args) => {
    const item = await ctx.db.insert("notifications", {
      ...args,
    })
    return item
  },
})
