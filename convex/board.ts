import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const createTask = mutation({
  args: { title: v.string(), authorId: v.string() },
  handler: async (ctx, args) => {
    const taskId = await ctx.db.insert("boards", {
      title: args.title,
      authorId: args.authorId,
    })
    // do something with `taskId`
  },
})
const DEFAULT_COLUMNS = ["To Do", "In Progress", "In Review", "Completed"]
export const createBoardTemplate = mutation({
  args: { title: v.string(), authorId: v.string() },
  handler: async (ctx, args) => {
    const board = await ctx.db.insert("boards", {
      title: args.title,
      authorId: args.authorId,
      description: "New board"
    })

    DEFAULT_COLUMNS.forEach((title, i) => {
      const newColumn = ctx.db.insert("columns", {
        title: title,
        boardId: board,
        position: i,
      })
    })

    return ctx.db.get(board);

    // do something with `taskId`
  },
})

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("boards").collect()
  },
})
