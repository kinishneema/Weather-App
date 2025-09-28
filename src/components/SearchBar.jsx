import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 justify-center w-full max-w-md"
    >
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="px-4 py-2 rounded-xl w-2/3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
