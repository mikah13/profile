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
    <div className="flex">
      <div className="flex-none w-64 h-64">
        <AspectRatio ratio={1 / 1} className="bg-muted w-full">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </div>
      <div className="grow">
        <Card>
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
