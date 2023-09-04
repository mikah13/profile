import React from "react";
import Markdown from 'markdown-to-jsx'
import { getPostById } from "../actions";
import ReactMarkdown from 'react-markdown'
import { remark } from 'remark';
import html from 'remark-html';
type Props = {};



const PageView = async ({ params }: { params: { postId: string } }) => {
  const post = await getPostById(params.postId);
  console.log(post);


  if (!post) {
    return null;
  }
  // const processedContent = await remark()
  //   .use(html)
  //   .process(post.content);
  // const contentHtml = processedContent.toString();
  return <div>
    PageView

    <article className="content">
      {/* <ReactMarkdown>{post.content}</ReactMarkdown> */}
      {/* <div dangerouslySetInnerHTML={{ __html: post.content }} /> */}
    </article>

  </div>;
};

export default PageView;
