


import "./globals.css";
import { FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa";
import { FiMail} from "react-icons/fi";
import { BsCodeSlash} from "react-icons/bs"
export const metadata = {
  title: "R Fajri Nandipinto",
  description: "Fullstack Web Developer",
};
import React from 'react'
import Link from "next/link";

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
    <body>
      <main className="main grid grid-cols-12 gap-1 px-10 py-12 xl:max-h-screen xl:overflow-hidden">
        <div className="sidebar xl:col-span-3 col-span-12 pr-8 mb-10 xl:mb-0">
          <BsCodeSlash className="text-3xl text-white mb-4" />
          <div className="text-6xl font-bold text-white mb-8">
            <h1>R Fajri</h1>
            <h1>Nandipinto.</h1>
          </div>
          <div className="text-gray-400 text-lg border-b-white">
            <p>I'm a web developer with experience in React, Next, Node, Express, and Tailwind CSS. Check out my portfolio to see examples of my work. Let's bring your project to life together!</p>
          </div>
          <hr className="my-8" />
          <div className="flex text-2xl text-gray-500 gap-4 mb-12">
            <Link href="https://www.linkedin.com/in/r-fajri-nandipinto-626229211/"><FaLinkedin /> </Link>
            <Link href="https://github.com/rfajrinandipinto"><FaGithub /> </Link>
            <Link href="https://www.instagram.com/r.fajri.n/"><FaInstagram /></Link>
            <Link href="mailto: nandipintorahmatfajri@gmail.com"><FiMail/></Link>
            
            
            
            
          </div>
          <div className="flex flex-col text-gray-400 gap-3 font-semibold">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <a href="/experience">Work Expreriences</a>
          </div>
        </div>
        <div className="mainContent xl:col-span-9 col-span-12 xl:pl-10">{children}</div>
      </main>
    </body>
  </html>
  )
}

export default Rootlayout

