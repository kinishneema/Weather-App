import React from "react";

export default function ForecastDisplay({ forecast }) {
  if (!forecast) return null;

  const daily = forecast.list.filter((_, index) => index % 8 === 0);

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 px-4">
      {daily.map((item, index) => (
        <div
          key={index}
          className="bg-white/80 backdrop-blur-lg rounded-xl shadow-md p-4 text-center hover:shadow-lg transition"
        >
          <p className="font-bold text-gray-900">
            {new Date(item.dt_txt).toDateString()}
          </p>
          <p className="capitalize text-gray-600">{item.weather[0].main}</p>
          <p className="text-lg font-bold text-blue-700">{item.main.temp}°C</p>
        </div>
      ))}
    </div>
  );
}
