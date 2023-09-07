"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence, easeInOut } from "framer-motion"
import { usePathname } from "next/navigation"
export const PageWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  const router = usePathname()
  return (
    <AnimatePresence>
      <motion.div
        key={router}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          duration: 1,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
        className={cn("min-h-screenHeightWithoutHeader", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
