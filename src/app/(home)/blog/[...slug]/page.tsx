import React from "react"
import { allPosts, allAuthors } from "contentlayer/generated"
import { notFound } from "next/navigation"
import { Mdx } from "@/components/mdx-components"
import { Metadata } from "next"
import Link from "next/link"
import { cn, formatDate } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { getTableOfContents } from "@/lib/toc"
import BlogHeader from "./_components/BlogHeader"
import BlogFooter from "./_components/BlogFooter"
import { BlogTOC } from "./_components/BlogTOC"
import BlogTag from "./_components/BlogTag"
import { Separator } from "@/components/ui/separator"
import BlogSummary from "./_components/BlogSummary"
interface PostPageProps {
  params: {
    slug: string[]
  }
}
async function getPostFromParams(params: PostPageProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  const url = process.env.NEXT_PUBLIC_APP_URL

  return {
    title: post.title,
    description: post.description,
    authors: post.authors.map((author) => ({
      name: author,
    })),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: `${url}/blog/${post.slug}`,
    },
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

const Blog = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  const toc = await getTableOfContents(post.body.raw)
  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/author/${author}`)
  )
  return (
    <article className="relative gap-4 xl:mt-6 xl:grid xl:grid-cols-7">
      <div className="col-span-1 text-center">
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "ghost" }), "")}
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          See all posts
        </Link>
      </div>

      <div className="col-span-4 mx-auto w-full min-w-0 px-6 lg:px-4">
        <BlogHeader
          image={post.image}
          date={post.date}
          title={post.title}
          authors={authors}
          readingTime={post.readingTime?.text}
        />
        <BlogSummary content={post.body.raw.toString()} />
        <Mdx code={post.body.code} />

        <hr className="mt-12" />
        <BlogFooter />
      </div>

      <div className="col-span-2 hidden text-sm xl:block">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10">
          <BlogTOC toc={toc} />
          {post.tags ? <BlogTag tags={post.tags} /> : null}
        </div>
      </div>
      {/* <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-[-200px] top-14 hidden xl:inline-flex"
        )}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        See all posts
      </Link>
      <div className="absolute right-[-200px] top-14  hidden text-sm xl:block ">
        <div className="sticky top-16 -mt-10 max-h-[calc(var(--vh)-4rem)] overflow-y-auto pt-10"></div>
      </div> */}
    </article>
  )
}

export default Blog
