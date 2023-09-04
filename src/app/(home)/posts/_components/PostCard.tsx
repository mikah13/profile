import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { FaUserLarge } from "react-icons/fa6";
import { Post } from "@/lib/types";
import { getUserById } from "../actions";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
type Props = {
  post: Post;
  key: number;
};
const PostCard = async (props: Props) => {
  const { post } = props;
  const { id, title, content, authorId, createdAt, likes, thumbnail } = post;
  console.log(post);
  const user = await getUserById(authorId);
  const placeholder = "https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80";
  const imageUrl = user?.image ?? '/images/user.png';
  const authorName = user?.name;

  return (
    <div className="relative flex justify-between space-x-5">
      {/* Mobile View */}
      <div className="relative w-full flex md:hidden">
        <AspectRatio ratio={16 / 9} className="w-full absolute">
          <Image
            src={thumbnail ? thumbnail : placeholder}
            alt={title}
            fill
            className="rounded-md object-cover"
          />

          <div className="bg-gradient-to-b from-transparent to-zinc-900 h-full w-full relative top">
            <div className="text-white absolute bottom-4 px-4">
              <div className="flex flex-col">
                <span>date</span>
                <div className="flex flex-row items-center space-x-2">
                  {/* <Avatar className="w-6 h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>{user.name}</AvatarFallback>
                  </Avatar>
                  <span>{name}</span> */}
                </div>
              </div>

              <div>
                <h2>{title}</h2>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      {/* Mobile View */}


      {/* Desktop View  */}
      <div className="flex-none w-64 h-64 hidden md:flex">
        <AspectRatio ratio={1 / 1} className=" w-full shadow-sm">
          <Image
            src={thumbnail ? thumbnail : placeholder}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div className="grow hidden md:flex ">
        <Card className="border-0 shadow-sm w-full">
          <CardHeader>
            <div className="flex flex-row">
              <p>{formatDate(createdAt)}</p>
              {/* <Badge variant="secondary">Secondary</Badge> */}
            </div>
          </CardHeader>
          <CardContent>

            <h2 className="font-extrabold text-2xl ">
              <Link className="dark:text-purple-300 text-violet-700  font-bold text-primary hover:underline hover:underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500" href={`/posts/${id}`}>{title}</Link></h2>
            <p className="my-6">{content}</p>
            <Separator />
          </CardContent>

          <CardFooter>
            <div className="flex flex-row gap-x-3 items-center">
              <Avatar>
                <AvatarImage src={imageUrl} />
                <AvatarFallback>{authorName}</AvatarFallback>
              </Avatar>

              <div className="flex flex-col font-bold ">
                <p>{authorName}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      {/* Desktop View  */}
    </div>
  );
};

export default PostCard;
