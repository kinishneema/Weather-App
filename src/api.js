const API_KEY = "4ef4f99edf74fb7876e08055f574fe58"; // replace with your real key
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("City not found");
  }
  return response.json();
};

export const fetchForecast = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Forecast not available");
  }
  return response.json();
};
