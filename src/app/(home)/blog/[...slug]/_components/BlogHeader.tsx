import { Author } from ".contentlayer/generated"
import { formatDate } from "@/lib/utils"
import React from "react"
import AuthorCard from "./AuthorCard"
import Image from "next/image"

type Props = {
  date: string
  title: string
  authors: (Author | undefined)[]
  image: string
  readingTime: string
}

const BlogHeader = ({ date, title, authors, image, readingTime }: Props) => {
  console.log(readingTime)
  return (
    <div>
      {date && (
        <time dateTime={date} className="block text-sm text-muted-foreground">
          Published on {formatDate(date)} · {readingTime}
        </time>
      )}
      <h1 className="font-heading mt-2 inline-block text-4xl font-extrabold leading-tight text-violet-800 dark:text-violet-400  lg:text-5xl">
        {title}
      </h1>
      {authors?.length ? (
        <div className="mt-4 flex space-x-4">
          <AuthorCard authors={authors} />
        </div>
      ) : null}
      {image && (
        <Image
          src={image}
          alt={title}
          width={720}
          height={405}
          className="mx-auto my-8 rounded-md border bg-muted transition-colors"
          priority
        />
      )}
    </div>
  )
}

export default BlogHeader
