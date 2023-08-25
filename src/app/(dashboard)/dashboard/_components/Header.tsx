import React from 'react'
import { ModeToggle } from "@/components/mode-toggle";
import { getCurrentUser } from "@/lib/session";
import UserDropdown from '@/components/user-dropdown';

type Props = {}

const DashboardHeader = async (props: Props) => {
    const user = await getCurrentUser();

    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent text-slate-900 dark:text-white">
            <div className="max-w-8xl mx-auto">
                <div className="flex py-4 border-b border-slate-900/10 lg:px-8 lg:border-0 dark:border-slate-300/10 mx-4 lg:mx-0">
                    <div className=" relative flex items-center px-2 py-1 ">
                        Dashboard
                    </div>

                    <div className="relative hidden lg:flex items-center ml-auto">
                        <nav className="flex space-x-8 ">


                            <ModeToggle />
                            <UserDropdown user={user} />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardHeader