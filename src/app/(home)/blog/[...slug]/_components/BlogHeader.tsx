import { Author } from ".contentlayer/generated"
import { formatDate } from "@/lib/utils"
import React from "react"
import Image from "next/image"
import Link from "next/link"

type Props = {
  date: string
  title: string
  authors: (Author | undefined)[]
  image: string
  readingTime: string
}


const AuthorCard = ({ authors }: { authors: (Author | undefined)[] }) => {
  if (!authors) {
    return null
  }
  return authors.map((author) =>
    author ? (
      <Link
        key={author._id}
        href={`https://github.com/${author.github}`}
        className="flex items-center space-x-2 text-sm"
      >
        <Image
          src={author.avatar}
          alt={author.title}
          width={42}
          height={42}
          className="rounded-full bg-white"
        />
        <div className="flex-1 text-left leading-tight">
          <p className="font-medium">{author.title}</p>
          <p className="text-[12px] text-muted-foreground">@{author.github}</p>
        </div>
      </Link>
    ) : null
  )
}

const BlogHeader = ({ date, title, authors, image, readingTime }: Props) => {
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
      {authors && authors.length ? (
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
