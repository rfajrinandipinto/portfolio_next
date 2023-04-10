"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'

const about = () => {

  return (
    <div className="xl:max-h-screen xl:overflow-scroll w-full">
      <div className="text-8xl font-bold text-white mb-8">
        <h1>About</h1>
        <h1>Me</h1>
      </div>
      <div className=" text-lg flex flex-col gap-5 xl:pr-60 pr-0 text-gray-400">
        <p>
          Hi there! My name is Rahamat Fajri Nandipinto, and I am an aspiring beginner full-stack developer with a passion for technology and an insatiable desire to learn. I am currently a college student, and I have been self-taught in
          the field of web development.
        </p>
        <p>From an early age, I have always been fascinated by technology and how it can be used to solve complex problems. As a result, I began teaching myself how to code when I was in high school, and I quickly fell in love with it.</p>
        <p>
          One of my greatest strengths as a developer is my ability to adapt quickly to new technologies. I am always looking for new and innovative ways to solve problems and improve my skills. Whether it's learning a new framework or
          programming language, I am always up for the challenge.
        </p>
        <p>
          In addition to my technical skills, I am also an excellent communicator and public speaker. I believe that communication is key in any team setting, and I always strive to keep my teammates informed and engaged. I am also
          comfortable presenting my ideas and solutions to large groups of people, which has proven to be a valuable asset in my previous team projects.
        </p>
        <p>
          Speaking of teamwork, I have several experiences working in a team environment, both in academic and professional settings. I understand the importance of collaboration, and I always strive to be a team player. I believe that the
          best ideas come from a diverse group of individuals working together towards a common goal.
        </p>
        <p>
          In terms of my technical skills, I am proficient in several frameworks and programming languages, including React.js, Next.js, Express.js, and Node.js. These tools have enabled me to create robust and dynamic web applications, and
          I am always looking to expand my knowledge in this area.
        </p>
        <p>
          In summary, I am Rahamat Fajri Nandipinto, a college student, self-taught full-stack developer, quick to adapt to new technologies, with excellent communication and public speaking skills, and several experiences working in a
          team. I am excited to continue learning and growing as a developer, and I can't wait to see where my skills and passion for technology will take me in the future!
        </p>
      </div>
    </div>
  )
}

export default about

