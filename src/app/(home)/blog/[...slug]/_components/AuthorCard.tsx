import React from "react";
import { Author } from ".contentlayer/generated";
import Link from "next/link";
import Image from "next/image";
type Props = {
  authors: (Author | undefined)[];
};

const AuthorCard = (props: Props) => {
  const { authors } = props;
  if (!authors) {
    return null;
  }
  return authors.map((author) =>
    author ? (
      <Link
        key={author._id}
        href={`https://twitter.com/${author.twitter}`}
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
          <p className="text-[12px] text-muted-foreground">@{author.twitter}</p>
        </div>
      </Link>
    ) : null,
  );
};

export default AuthorCard;
