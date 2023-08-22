import PostCard from "./_components/PostCard";
import { getAllPosts } from "./loaders";
type Props = {};

const Posts = async (props: Props) => {
  const posts = await getAllPosts();
  return (
    <main
      id="posts"
      className="flex font-mono min-h-screen flex-col px-4 md:px-12 lg:px-24 antialiased pt-12"
    >
      <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight ">
        Learn.{" "}
        <span className="text-violet-700 dark:text-violet-400">Share.</span>{" "}
        Repeat.
      </h1>

      <p className="font-medium tracking-tight transition-colors first:mt-0 mt-4">
        A place for me to document my coding journey.
      </p>

      <div id="postcard-wrapper" className="my-10 flex space-y-12 flex-col">
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </main>
  );
};

export default Posts;
