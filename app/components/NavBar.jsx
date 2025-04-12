"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"

function NavBar() {

    const router = useRouter();

    const images = [
        "https://images.pexels.com/photos/31422080/pexels-photo-31422080/free-photo-of-majestic-snow-covered-alpine-mountain-range.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/844297/pexels-photo-844297.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/3732527/pexels-photo-3732527.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/12734294/pexels-photo-12734294.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/1449638/pexels-photo-1449638.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/19670/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/18069161/pexels-photo-18069161/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-process-used-by-text-to-image-diffusion-models-it-was-created-by-linus-zoll-as-part-of-the-visualising-ai.png?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2748716/pexels-photo-2748716.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31409439/pexels-photo-31409439/free-photo-of-dramatic-sky-with-moon-and-cloudscape-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31425381/pexels-photo-31425381/free-photo-of-expansive-green-field-under-dramatic-cloudy-sky.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31424799/pexels-photo-31424799/free-photo-of-snowy-day-at-tromso-cathedral-norway.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31418223/pexels-photo-31418223/free-photo-of-close-up-of-melting-ice-layer-in-winter.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31417424/pexels-photo-31417424/free-photo-of-calm-blue-waters-under-stormy-skies.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31404977/pexels-photo-31404977/free-photo-of-lightning-storm-over-rural-south-africa.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31407302/pexels-photo-31407302/free-photo-of-misty-mountain-landscape-with-snowy-forest.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31415383/pexels-photo-31415383/free-photo-of-snow-covered-red-berries-in-winter-otaru-japan.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
    
    const ImageSlider = () => {
        const [currentIndex, setCurrentIndex] = useState(0);
      
        useEffect(() => {
          const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
          }, 4000);
      
          return () => clearInterval(timer);
        }, [images]);

        return currentIndex;
    }

    const index = ImageSlider();

  return (
    <>
        <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191">Click me</a>
    <div className="absolute top-0 w-full bg-black py-4 px-9 flex items-center justify-between">
        <h1 className='text-white font-bold text-4xl max-sm:text-3xl hover:cursor-pointer' onClick={()=> router.push("/")}>Weather App</h1>
        <div className="h-[6vw] w-[6vw] max-sm:w-[17vw] max-sm:h-[17vw] rounded-full overflow-hidden">
            <img className='h-full w-full object-cover' src={images[index]} alt="" />
        </div>
     </div>
        <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191">Click me</a>
    </>
  )
}

export default NavBar
