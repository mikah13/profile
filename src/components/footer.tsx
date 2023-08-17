import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full border-t h-48 mt-40 container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-black dark:text-slate-200">
          Built by{" "}
          <a
            target="_blank"
            className="cursor-pointer dark:text-purple-300 text-violet-600  font-bold  underline underline-offset-4 hover:text-pink-500 dark:hover:text-pink-500"
          >
            Mike Hoang
          </a>
          . The source code is available on GitHub
        </p>
        <div id="footerSocial"></div>
      </div>
    </footer>
  );
};

export default Footer;
