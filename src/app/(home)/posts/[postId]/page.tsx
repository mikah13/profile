import React from "react";
import ReactMarkdown from "react-markdown";
import { getPostById } from "../actions";
type Props = {};

const PageView = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId);
  console.log(post);
  if (!post) {
    return null;
  }
  return <div>
    PageView

    <article className="content">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>

  </div>;
};

export default PageView;
