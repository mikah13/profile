import PostCard from "./_components/PostCard"
import { getAllPosts } from "./actions"
import { SessionProvider } from "next-auth/react"
import { AppProps } from "next/app"
type Props = {}

const Posts = async (props: Props) => {
  const posts = await getAllPosts()

  return (
    <main
      id="posts"
      className="mx-auto my-0 flex min-h-screen max-w-[1500px] flex-col px-4 pt-12  antialiased md:px-12 lg:px-24"
    >
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl ">
        Learn.{" "}
        <span className="text-violet-700 dark:text-violet-400">Share.</span>{" "}
        Repeat.
      </h1>

      <p className="mt-4 font-medium tracking-tight transition-colors first:mt-0">
        A place for me to document my coding journey.
      </p>

      <div id="postcard-wrapper" className="my-10 flex flex-col space-y-12">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </main>
  )
}

export default Posts
