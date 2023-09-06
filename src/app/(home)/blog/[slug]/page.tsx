import React from 'react'
import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { Mdx } from '@/components/mdx-components'
type Props = {
    params: {
        slug: string
    }
}


async function getDocFromParams(slug: string) {
    const doc = allPosts.find(post => post.slugAsParams === slug);

    if (!doc) {
        notFound
    }

    return doc;

}
const Blog = async ({ params }: Props) => {
    const doc = await getDocFromParams(params.slug)

    if (!doc) {
        notFound()
    }

    return (

        <div>


            <Mdx code={doc?.body.code || " "} />
        </div>
    )
}

export default Blog