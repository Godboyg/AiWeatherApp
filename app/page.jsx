"use client"
import React, { useEffect, useState } from 'react'
import "./globals.css"
import { useRouter } from "next/navigation"
import NavBar from './components/NavBar'
import AdsterraSocialBar from './AdsterraSocialBar';

function page() {

  const router = useRouter()

  return (
    <>
      <AdsterraSocialBar />
      <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191" target="_blank">Click me</a>
    <div className="relative h-screen w-full bg-gray-400">
     <NavBar />
      <AdsterraSocialBar />
     <div className="text-black absolute top-40 py-5 px-10 max-sm:w-full max-sm:text-center">
       <h1 className='font-bold text-3xl max-sm:text-2xl'>AI-Powered Weather App for Travelers</h1>
       <p className='mt-2 text-[1.3vw] max-sm:text-[4.1vw]'>Travellers can use this web app to understand the weather conditions of the city they are travelling to so that they can plan their travel better and along with i have integrated AI so that u can find best hotels, places while travelling.</p>
       <div className="w-36 mt-10 p-5 rounded-lg shadow-xl flex items-center justify-center bg-black text-white font-bold">
         <button className='hover:cursor-pointer h-full w-full' onClick={()=> router.push("/weather")}>Get Started !</button>
       </div>
     </div>
    </div>
      <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191" target="_blank">Click me</a>
      <AdsterraSocialBar />
    </>
  )
}

export default page
