import React from "react";
import { useWeather } from "../context/WeatherContext";

function Weather() {
  const { weather } = useWeather();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log(weather);
  return (
    <div className="weather-card-container">
      {weather.daily &&
        weather.daily.map((item, i) => (
          <div
            key={i}
            className={i === 0 ? "weather-card active" : "weather-card"}
          >
            <div className="day">{days[new Date(item.dt * 1000).getDay()]}</div>
            <img
              className="weather-icon"
              src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
              alt="Weather icon"
            ></img>
            <div className="temp">
              <span className="temp-day">
                Day:{Math.floor(item.temp.day - 273.15)}
              </span>
              <br />
              <span className="temp-night">
                Night:{Math.floor(item.temp.night - 273.15)}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Weather;
