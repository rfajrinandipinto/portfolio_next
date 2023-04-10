"use client"

import React, { useEffect } from 'react'
import { useState } from 'react'

const about = () => {

  return (
    <div className="xl:max-h-screen xl:overflow-scroll w-full scrollbar-hide">
      <div className="text-7xl font-bold text-white mb-8">
        <h1>Work</h1>
        <h1>Experience</h1>
      </div>
      <div className="grid grid-cols-12 text-white mb-10 border-b pb-5">
        <div className="xl:col-span-3 col-span-12">
          <img className='rounded-lg h-32 w-32 object-cover mb-5' src="/dikti.jpg" alt="" />
          
          <p className='text-3xl font-semibold'>DIKTI ( SISTER )</p>
          <p className='text-xl font-semibold mb-3'>Intern Fullstack Developer</p>
          <p className='text-xl font-semibold'>Feb 2023 - Now</p>
        </div>
        <div className="xl:col-span-8 col-span-12   ml-8">
          <p className='text-xl mb-3'>
            - Design and implement database schema for new FAQ features in existing mssql database 
        
          </p>
          <p className='text-xl mb-3'>
            - Develop frontend FAQ page for users using laravel 5 blade and bootstrap 3
        
          </p>
          <p className='text-xl mb-3'>
            - Develop CRUD FAQ dashboard for admin using laravel 5 blade and bootstrap 3
        
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 text-white mb-10 border-b pb-5">
        <div className="xl:col-span-3 col-span-12">
          <img className='rounded-lg h-32 w-32 object-cover mb-5 ' src="/indonesiait.jpg" alt="" />
          
          <p className='text-3xl font-semibold'>Indonesia IT</p>
          <p className='text-xl font-semibold mb-3'>Intern Fullstack Developer</p>
          <p className='text-xl font-semibold'>Feb 2023 - Now</p>
        </div>
        <div className="xl:col-span-8 col-span-12  ml-8">
          <p className='text-xl mb-3'>
            - Design and implement Postgresql database for BengkelMobil car service management App 
        
          </p>
          <p className='text-xl'>
            - Develop rest api using Express.js to be consumed by React and Flutter frontend
        
          </p>
        </div>
      </div>
      <div className="grid grid-cols-12 text-white mb-10 border-b pb-5">
        <div className="xl:col-span-3 col-span-12">
          <img className='rounded-lg h-32 w-32 object-cover mb-5' src="/indonesiait.jpg" alt="" />
          
          <p className='text-3xl font-semibold'>Indonesia IT</p>
          <p className='text-xl font-semibold mb-3'>Intern React.js Developer</p>
          <p className='text-xl font-semibold'>Dec 2022 - Feb 2023</p>
        </div>
        <div className="xl:col-span-8 col-span-12  ml-8">
          <p className='text-xl mb-3'>
            - Implement new features for existing ritxbertani website using react.js, Antdesign for the UI by fetching data from REST API backend , including CRUD operation , filter and displaying data using jquery 
        
          </p>
          <p className='text-xl'>
            - Implement React Google maps location picker libraries to get user bussiness location with interactive google maps 
        
          </p>
        </div>
      </div>
    </div>
  )
}

export default about

