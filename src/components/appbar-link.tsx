"use client"
import Link from "next/link"
import { motion } from "framer-motion"
type Props = {
  link: {
    href: string
    label: string
  }
}
const AppbarLink = ({ link }: Props) => {
  return (
    <Link
      href={link.href}
      className="animated-link relative flex items-center font-bold after:bg-violet-700 dark:text-white dark:after:bg-violet-400"
    >
      {link.label}
    </Link>
  )
}

export default AppbarLink
