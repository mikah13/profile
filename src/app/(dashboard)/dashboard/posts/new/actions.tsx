'use server'
import { UnauthorizedError } from "@/lib/custom-hook";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";


export async function createNewPost({
    title,
    content,
    draft,
    thumbnail,

}: { title: string, content: string, thumbnail?: string, draft?: boolean }) {

    const user = await getCurrentUser();

    if (!user) throw new UnauthorizedError();

    const post = await prisma.post.create({
        data: {
            title: title,
            content: content,
            published: !draft,
            authorId: user.id,

        },
    })
    return post;
}