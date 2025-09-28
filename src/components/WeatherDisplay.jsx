import React from "react";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";

export default function WeatherDisplay({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white/80 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-80 text-center transition-transform hover:scale-105">
      <h2 className="text-2xl font-bold text-gray-800">
        {data.name}, {data.sys.country}
      </h2>
      <p className="text-lg text-gray-600 capitalize">
        {data.weather[0].description}
      </p>

      <div className="flex items-center justify-center gap-2 my-3">
        <FaTemperatureHigh className="text-red-500 text-3xl" />
        <p className="text-4xl font-extrabold text-gray-900">
          {data.main.temp}°C
        </p>
      </div>

      <div className="flex justify-center items-center gap-2 text-gray-700">
        <WiHumidity className="text-blue-500 text-3xl" />
        <span>Humidity: {data.main.humidity}%</span>
      </div>
    </div>
  );
}
