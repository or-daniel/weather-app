import "./App.css";
import React, { useEffect, useState } from "react";
import Weather from "./components/weather/Weather";
import Header from "./components/Header";
import Card from "./components/UI/Card";

const api = {
  REACT_APP_API_URL: "https://api.openweathermap.org/data/2.5",
  REACT_APP_API_KEY: "935f1b3441c766d6c50e7dcc11dc6f0a",
};

export default function App() {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
    if (!lat || !long) return;

    getWeather(lat, long)
      .then((weather) => {
        console.log(JSON.stringify(weather));
        console.log(weather);
        setWeatherData(weather);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [lat, long, error]);

  const handleResponse = (response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Please Enable your Location in your browser!");
    }
  };

  const getWeather = (lat, long) => {
    return fetch(
      `${api.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${api.REACT_APP_API_KEY}`
    )
      .then((res) => handleResponse(res))
      .then((weather) => {
        if (Object.entries(weather).length) {
          return weather;
        }
      });
  };

  return (
    <div className="App">
      {weatherData ? (
        <Card>
          <Header weatherData={weatherData} />
          <Weather weatherData={weatherData} />
        </Card>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
