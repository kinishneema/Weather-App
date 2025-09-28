import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastDisplay from "./components/ForecastDisplay";
import Loader from "./components/Loader";
import { fetchWeather, fetchForecast } from "./api";

export default function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [currentCity, setCurrentCity] = useState(""); // current successful city
  const [lastCity, setLastCity] = useState(""); // previous city

  const handleSearch = async (city) => {
    setLoading(true);
    setError("");

    try {
      const weatherData = await fetchWeather(city);
      const forecastData = await fetchForecast(city);

      setWeather(weatherData);
      setForecast(forecastData);

      // Update lastCity **before** updating currentCity
      if (currentCity) {
        setLastCity(currentCity);
        localStorage.setItem("lastCity", currentCity);
      }

      // Set current city after successful fetch
      setCurrentCity(city);
    } catch (err) {
      setError(err.message);
      setWeather(null);
      setForecast(null);
      // Do NOT update lastCity if fetch fails
    } finally {
      setLoading(false);
    }
  };

  // Load last searched city from localStorage on app start
  useEffect(() => {
    const savedCity = localStorage.getItem("lastCity");
    if (savedCity) {
      setLastCity(savedCity);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-blue-200 to-white p-6">
      <div className="w-full max-w-5xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-800 mb-6 drop-shadow-lg">
          Weather App
        </h1>

        <SearchBar onSearch={handleSearch} />

        {/* Last searched city */}
        <p className="text-gray-700 italic mt-2">
          Last searched:{" "}
          {lastCity ? (
            <span
              className="font-semibold cursor-pointer hover:text-blue-600"
              onClick={() => handleSearch(lastCity)}
            >
              {lastCity}
            </span>
          ) : (
            "No city searched yet"
          )}
        </p>

        {loading && <Loader />}
        {error && <p className="text-red-600 font-semibold mt-4">{error}</p>}

        <WeatherDisplay data={weather} />

        {forecast && (
          <div className="mt-8 w-full">
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">
              5-Day Forecast
            </h2>
            <ForecastDisplay forecast={forecast} />
          </div>
        )}
      </div>
    </div>
  );
}
