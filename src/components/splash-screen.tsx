import React, { useEffect, useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion } from "framer-motion"
type Props = {
  finishLoading: Function
}

const SplashScreen = ({ finishLoading }: Props) => {
  return (
    <div
      //   isMounted={isMounted}
      className="flex h-screen items-center  justify-center"
    >
      <AnimatePresence>
        <motion.div
          key="splash-screen"
          initial={{ opacity: 0 }}
          onAnimationComplete={() => finishLoading()}
          exit={{ opacity: 0 }}
          animate={{
            scale: 1,
            rotate: 360,
            opacity: 1,
          }}
          transition={{ ease: "linear", duration: 1.5 }}
        >
          <Image
            width={120}
            height={120}
            id="loadingLogo"
            src="/images/logo.png"
            alt="logo"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default SplashScreen
