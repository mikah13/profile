import React from "react"

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="container mt-40 flex h-48 w-full flex-col items-center justify-between gap-4 border-t md:h-24 md:flex-row">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-black dark:text-zinc-200">
          Built by{" "}
          <a
            target="_blank"
            className="cursor-pointer font-bold text-violet-600  underline  underline-offset-4 hover:text-pink-500 dark:text-purple-300 dark:hover:text-pink-500"
          >
            Mike Hoang
          </a>
          . The source code is available on GitHub
        </p>
        <div id="footerSocial"></div>
      </div>
    </footer>
  )
}

export default Footer
