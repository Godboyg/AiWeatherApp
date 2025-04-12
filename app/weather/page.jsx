"use client"
import React, { useEffect, useState } from "react";
import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiFog } from "react-icons/wi";
import NavBar from "../components/NavBar";
import { useRouter } from "next/navigation"

const WeatherApp = () => {

  const router = useRouter();

  const [lon, setLon] = useState(null)
  const [lat, setLat] = useState(null)
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [cweather, setCWeather] = useState(null);

  const getLocation = async() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      console.error("Geolocation not supported");
    }
  }
  const getCurrentWeather = async() => {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    )
    const weatherData = await weatherResponse.json();
    setCWeather(weatherData);
  }

  useEffect(() => {
    getLocation();
  },[]);

  const getWeather = async () => {
    if (!city) return;
    const geoResponse = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`
    );
    const geoData = await geoResponse.json();
    if (geoData.length === 0) {
      alert("City not found");
      return;
    }
    const { lat, lon } = geoData[0];

    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric`
    );
    const weatherData = await weatherResponse.json();
    setWeather(weatherData);
  };

  const getWeatherIcon = (main) => {
    switch (main) {
      case "Clear": return <WiDaySunny size={50} />;
      case "Clouds": return <WiCloudy size={50} />;
      case "Rain": return <WiRain size={50} />;
      case "Snow": return <WiSnow size={50} />;
      case "Fog": return <WiFog size={50} />;
      default: return <WiCloudy size={50} />;
    }
  };

  return (
    <>
      <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191" target="_blank">Click me</a>
    <div className="">
    <NavBar/>
    <div className="absolute top-45 py-3 px-7">
      <button className="p-3 bg-black rounded-lg text-white hover:cursor-pointer transform delay-10 hover:scale-98" onClick={getCurrentWeather}>Get Current Weather</button>
      <button className="p-3 ml-3 rounded-lg bg-black text-white hover:cursor-pointer transform delay-10 hover:scale-98" onClick={()=>router.push("/weather/ai")}>AI</button>
      { cweather && (
        <div className="w-full py-3 bg-gray-600 text-white rounded-2xl mt-3 px-5">
          {getWeatherIcon(cweather.weather[0].main)}
          <div>
            <h2 className="text-xl font-semibold">{cweather.name}</h2>
            <p className="text-lg">{cweather.main.temp}°C</p>
            <p className="text-white font-bold">{cweather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-400 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather Checker</h1>
      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border rounded-xl"
        />
        <button onClick={getWeather} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:cursor-pointer">Search</button>
      </div>
      {weather && (
        <div className="w-80 p-4 text-center bg-white shadow-xl rounded-xl">
          {getWeatherIcon(weather.weather[0].main)}
          <div>
            <h2 className="text-xl font-semibold">{weather.name}</h2>
            <p className="text-lg">{weather.main.temp}°C</p>
            <p className="text-gray-600">{weather.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
    </div>
      <a href="https://www.profitableratecpm.com/ppwbfwy4r?key=7a50bbba28ebb474e210f95c12a2f191" target="_blank">Click me</a>
    </>
  );
};

export default WeatherApp;
