import { getCurrentUser } from '@/lib/session'
import React from 'react'
import { getAllPostsByUserId } from './new/actions';
import { columns } from "./_components/columns"
import { DataTable } from "./_components/data-table"
type Props = {}



const DashboardPosts = async (props: Props) => {


    const user = await getCurrentUser();
    if (!user) {
        return <p>No available post</p>
    }


    const posts = await getAllPostsByUserId(user.id);


    return (
        <div>
            <DataTable columns={columns} data={posts} />
        </div>
    )
}

export default DashboardPosts