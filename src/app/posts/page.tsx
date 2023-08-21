import React from "react";

type Props = {};

const Posts = (props: Props) => {
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
    </main>
  );
};

export default Posts;
