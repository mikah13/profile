"use client"

import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
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
        initial={{ opacity: 0, y: 700 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.75,
          ease: "linear",
        }}
      
        className={cn("min-h-screenHeightWithoutHeader", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
