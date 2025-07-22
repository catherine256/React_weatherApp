import React, { useState } from "react";
import axios from "axios";

function WeatherApp() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const apiKey = "082d3d02ffdb12f2fd9b259e2ced1d0d";
    const units = "metric";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;

    try {
      const response = await axios.get(url);
      setTemperature(response.data.main.temp);
      setError("");
    } catch (err) {
      setError("City not found or API error.");
      setTemperature(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather Search Engine 🌤️</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {temperature !== null && (
        <h2>
          Temperature in {city}: {temperature}°C
        </h2>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default WeatherApp;
