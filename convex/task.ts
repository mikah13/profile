import { query, mutation } from "./_generated/server"
import { v } from "convex/values"

export const getTaskFromColumn = query({
  args: {
    columnId: v.string(),
  },
  handler: async (ctx, args) => {
    const tasks = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("columnId"), args.columnId))
      .collect()

    return tasks
  },
})
export const getTaskFromBoard = query({
  args: {
    boardId: v.string(),
  },
  handler: async (ctx, args) => {
    const tasks = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("boardId"), args.boardId))
      .collect()

    return tasks
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
    const task = await ctx.db.insert("tasks", {
      title: args.title,
      description: args.description,
      position: args.position,
      columnId: args.columnId,
      boardId: args.boardId,
    })
    // do something with `taskId`
    return ctx.db.get(task)
  },
})
