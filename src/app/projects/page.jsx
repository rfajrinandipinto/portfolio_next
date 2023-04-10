"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'
import { FaChevronRight} from "react-icons/fa"
import Link from 'next/link'

const projects = () => {






  return (
    <div className="fadeIn xl:max-h-screen xl:overflow-scroll w-full">
      
      <div className=" text-lg flex flex-col gap-5 text-gray-400 mb-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="xl:col-span-6 col-span-12 xl:mb-0 mb-10">
              
              <img className='w-full rounded-lg h-96 object-cover' src="/project1.png" alt="" />

                <div className="mt-5">
                <p className='text-white font-bold text-2xl mb-2'>W News</p>
                <p className='font-semibold'>Responsive News Page made with <span className='font-semibold text-white'>Next.js and Tailwind.css </span></p>
                </div>

                <div className="flex mt-5 gap-10 justify-between">
                {/* <Link href="/" className='text-white font-bold flex items-center'>Github <FaChevronRight className='text-sm ml-5'/></Link> */}
                <button href="/" className=' font-bold flex items-center bg-white text-black px-8 py-2 rounded'>Demo</button>
                </div>

                


            </div>

            <div className="xl:col-span-6 col-span-12 xl:mb-0 mb-10">
              
              <img className='w-full rounded-lg h-96 object-cover' src="/project2.png" alt="" />

                <div className="mt-5">
                <p className='text-white font-bold text-2xl mb-2'>Skilled Course</p>
                <p className='font-semibold'>Responsive E-Learning landing page made with <span className='font-semibold text-white'>Next.js and Tailwind.css </span></p>
                </div>

                <div className="flex mt-5 gap-10 justify-between">
                {/* <Link href="/" className='text-white font-bold flex items-center'>Github <FaChevronRight className='text-sm ml-5'/></Link> */}
                <button href="/" className=' font-bold flex items-center bg-white text-black px-8 py-2 rounded'>Demo</button>
                </div>

                


            </div>

            <div className="xl:col-span-6 col-span-12 xl:mb-0 mb-10">
              
              <img className='w-full rounded-lg h-96 object-cover' src="/project3.png" alt="" />

                <div className="mt-5">
                <p className='text-white font-bold text-2xl mb-2'>Time Now</p>
                <p className='font-semibold'>Responsive Sass App Page made with <span className='font-semibold text-white'>Next.js and Tailwind.css </span></p>
                </div>

                <div className="flex mt-5 gap-10 justify-between">
                {/* <Link href="/" className='text-white font-bold flex items-center'>Github <FaChevronRight className='text-sm ml-5'/></Link> */}
                <button href="/" className=' font-bold flex items-center bg-white text-black px-8 py-2 rounded'>Demo</button>
                </div>

                


            </div>

            <div className="xl:col-span-6 col-span-12 xl:mb-0 mb-10">
              
              <img className='w-full rounded-lg h-96 object-cover' src="/project4.png" alt="" />

                <div className="mt-5">
                <p className='text-white font-bold text-2xl mb-2'>Binar Car Rental</p>
                <p className='font-semibold'>Responsive Car Rental made with <span className='font-semibold text-white'>Next.js and Bootstrap.css </span></p>
                </div>

                <div className="flex mt-5 gap-10 justify-between">
                {/* <Link href="/" className='text-white font-bold flex items-center'>Github <FaChevronRight className='text-sm ml-5'/></Link> */}
                <button href="/" className=' font-bold flex items-center bg-white text-black px-8 py-2 rounded'>Demo</button>
                </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default projects

