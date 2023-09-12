import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

const DEFAULT_COLUMNS = ["To Do", "In Progress", "In Review", "Completed"]
export const createBoardTemplate = mutation({
  args: { title: v.string(), authorId: v.string() },
  handler: async (ctx, args) => {
    const board = await ctx.db.insert("boards", {
      title: args.title,
      authorId: args.authorId,
      description: "New board",
    })

    DEFAULT_COLUMNS.forEach((title, i) => {
      const newColumn = ctx.db.insert("columns", {
        title: title,
        boardId: board,
        position: i,
      })
    })

    return ctx.db.get(board)
  },
})

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("boards").collect()
  },
})

export const getBoardById = query({
  args: { boardId: v.string() },
  handler: async (ctx, args) => {
    const board = await ctx.db
      .query("boards")
      .filter((q) => q.eq(q.field("_id"), args.boardId))
      .unique()
    return board
  },
})

export const getBoardColumnTask = query({
  args: { boardId: v.string() },
  handler: async (ctx, args) => {
    const board = await ctx.db
      .query("boards")
      .filter((q) => q.eq(q.field("_id"), args.boardId))
      .unique()

    const columns = await ctx.db
      .query("columns")
      .filter((q) => q.eq(q.field("boardId"), args.boardId))
      .collect()

    const tasks = await ctx.db
      .query("tasks")
      .filter((q) => q.eq(q.field("boardId"), args.boardId))
      .collect()
    return { tasks, columns }
  },
})
