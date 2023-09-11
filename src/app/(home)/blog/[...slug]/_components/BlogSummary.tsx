import { useChat, useCompletion } from "ai/react"
import React from "react"
import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"
import { Suspense } from "react"
type Props = {
  content: string
}

const BlogSummary = async ({ content }: Props) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [
      {
        role: "user",
        content: `Summarize this blog in 3 sentences: \n\n "${content}"`,
      },
    ],
  })

  const stream = OpenAIStream(response)

  const reader = stream.getReader()

  return (
    <div className="my-12 space-y-4">
      <p className="text-xl font-bold">Summary:</p>
      <div className="py-2">
        <Reader reader={reader} />
      </div>
    </div>
  )
}
async function Reader({
  reader,
}: {
  reader: ReadableStreamDefaultReader<any>
}) {
  const { done, value } = await reader.read()

  if (done) {
    return null
  }

  const text = new TextDecoder().decode(value)

  return (
    <span>
      {text}
      <Suspense>
        <Reader reader={reader} />
      </Suspense>
    </span>
  )
}
export default BlogSummary
