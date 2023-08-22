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
type Props = {};

const PostCard = (props: Props) => {
  return (
    <div className="relative flex justify-between space-x-5 min-h-[400px] ">
      <div className="relative w-full flex md:hidden">
        <AspectRatio ratio={16 / 9} className="w-full absolute">
          <Image
            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />

          <div className="bg-gradient-to-b from-transparent to-slate-900 h-full w-full relative top">
            {" "}
            <div className="text-white absolute bottom-4 px-4">
              <div className="flex flex-col">
                <span>Mar 16, 2023</span>
                <div className="flex flex-row items-center space-x-2">
                  <Avatar className="w-6 h-6">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <span> Mike Hoang</span>
                </div>
              </div>

              <div>
                <h2>Post title</h2>
              </div>
            </div>
          </div>
        </AspectRatio>
      </div>
      <div className="flex-none w-64 h-64  hidden md:flex">
        <AspectRatio ratio={1 / 1} className=" w-full shadow-sm">
          <Image
            src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>

      <div className="grow hidden md:flex">
        <Card className="border-0 shadow-sm">
          <CardHeader>
            <div className="flex flex-row">
              <p>Mar 16, 2023</p>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <h2>Post number 1</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus voluptate libero ducimus, et fugiat vero illo eligendi
              laborum, vitae a hic illum nobis exercitationem at assumenda
              porro? Sunt, magnam repellendus.
            </p>
            <Separator />
          </CardContent>

          <CardFooter>
            <div className="flex flex-row">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <div className="flex flex-col">
                {" "}
                <p>Author</p>
                <p>Author Description</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PostCard;
