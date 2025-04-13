"use client"
import React, { useEffect, useState } from 'react'
import { GoogleGenAI } from "@google/genai";
import { useRouter } from "next/navigation"
import AdsterraSocialBar from '@/app/AdsterraSocialBar';

function page() {

  const router = useRouter()

  const [ answer , setAnswer ] = useState();
  const [ value , setValue ] = useState()
  const [ isVisible , setIsVisible ] = useState(false)
  const [ isSVisible , setIsSVisible ] = useState(false)

  const ai = new GoogleGenAI({ apiKey: process.env.NEXT_PUBLIC_API_KEY });

   const main = async()=>{
    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: `${value}`,
      });
      console.log(response.text);
      if(response.ok == undefined){
        console.log("successful");
      }
      else{
        setIsVisible(false);
        alert("Time Out Search Again");
      }
      setAnswer(response.text);
    } catch (error) {
      setIsVisible(false)
      alert(error || "error parsing the data")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setValue("");
    main();
  }

  const handleSearch = () => {
    setAnswer("");
    setIsSVisible(false);
    setIsVisible(true);
  }

  const handleValue = (e) => {
    setValue(e.target.value);
    if(e.target.value){
      setIsSVisible(true)
    }
    else{
      setIsSVisible(false);
    }
  }

  return (
    <>
      <AdsterraSocialBar />
    <div className="font-bold bg-black text-white h-screen w-full p-5">
      <h1 className='text-2xl' onClick={()=>router.push("/")}>AI</h1>
      <form className='flex items-center gap-3' onSubmit={handleSubmit}>
        <input type="text" placeholder='Ask me anything' value={value} onChange={handleValue} className='mt-3 h-12 w-[40vw] p-3 max-sm:w-[50vw] rounded-lg outline-none border-2 border-cyan-100'/>
        <button className={`bg-white text-black p-5 hover:cursor-pointer rounded-full transition-all delay-70 ${isSVisible ? "scale-100 opacity-100" : "scale-1 opacity-0"}`} onClick={handleSearch}>Search</button>
      </form>
      <div className="h-[80vh] overflow-auto scroll rounded-lg mt-4">
        { answer ? (
          <>
          <div className="p-4 border rounded-lg text-black bg-gray-400">
            <pre className="whitespace-pre-wrap text-xl">{answer}</pre>
         </div>
          </>
        ) : (
          <p className={`font-bold text-2xl flex items-center justify-center ${isVisible ? "block" : "hidden"}`}>Loading.......</p>
        )}
      </div>
    </div>
      <AdsterraSocialBar />
    </>
  )
}

export default page
