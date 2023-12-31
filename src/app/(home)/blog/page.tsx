import Image from "next/image"
import Link from "next/link"
import { allPosts } from "contentlayer/generated"
import { compareDesc } from "date-fns"
import { formatDate } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import BlogSearchButton from "./[...slug]/_components/BlogSearchButton"
export const metadata: Metadata = {
  title: "Mike Hoang | Blog",
  description: "Mike Hoang - Software Developer",
}

export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date))
    })

  return (
    <main id="blog" className="container max-w-4xl py-6  lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block  text-4xl  font-extrabold tracking-tight lg:text-5xl">
            Learn.{" "}
            <span className="text-violet-700 dark:text-violet-400">Share.</span>{" "}
            Repeat.
          </h1>
          <p className="text-xl font-medium text-muted-foreground ">
            A place for me to share my coding journey.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <BlogSearchButton posts={posts} />
      {posts?.length ? (
        <div className="grid gap-10 sm:grid-cols-2">
          {posts.map((post, index) => (
            <article
              key={post._id}
              className="group relative flex flex-col space-y-2"
            >
              {post.image && (
                <AspectRatio ratio={16 / 9} className="w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="rounded-md border bg-muted transition-colors"
                    priority={index <= 1}
                  />
                </AspectRatio>
              )}
              <h2 className="text-2xl font-extrabold">{post.title}</h2>
              {post.description && (
                <p className="text-muted-foreground">{post.description}</p>
              )}
              {post.date && (
                <p className="text-sm text-muted-foreground">
                  {formatDate(post.date)} · {post.readingTime?.text}
                </p>
              )}
              <Link href={post.slug} className="absolute inset-0">
                <span className="sr-only">View Article</span>
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <p>No posts published.</p>
      )}
    </main>
  )
}
