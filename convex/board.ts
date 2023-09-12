import { mutation, query } from "./_generated/server"
import { v } from "convex/values"
import { Boards, ColumnTitle } from "./type"

export const createBoardTemplate = mutation({
  args: Boards,
  handler: async (ctx, args) => {
    const board = await ctx.db.insert("boards", {
      ...args,
    })
    console.log(board, args)
    Object.values(ColumnTitle).forEach(async (value, index) => {
      await ctx.db.insert("columns", {
        title: value,
        boardId: board,
        position: index,
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
