import { createContext, useEffect, useState, useContext } from "react";
import { useGeolocated } from "react-geolocated";
import axios from "axios";

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({ lat: 41, lon: 28 });

  console.log(location, "BUUUUUU");
  const getWeatherData = async function (location) {
    const { lat, lon } = location;
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts`
      );
      setWeather(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      alert("Veriler çekilemedi");
    }
  };
  useEffect(() => {
    location && getWeatherData(location);
  }, [location]);
  const values = {
    weather,
    location,
    setLocation,
  };
  return (
    <WeatherContext.Provider value={values}>
      {children}

      {/* <h2>Hava Durumu:</h2>
      <h3>Enlem:{latitude}</h3>
      <h3>Boylam:{longitude}</h3>
      <h3>Koordinat Bölgesi:{weather.name}</h3>
      <h3>Hava Sıcaklığı:{Math.floor(weather.main.temp - 273.15)}</h3>
      <h3>Hava Durumu:{weather.weather.map((data) => data.main)}</h3>
      <h3>Hava Özelliği:{weather.weather.map((data) => data.description)}</h3> */}
    </WeatherContext.Provider>
  );
};

const useWeather = () => useContext(WeatherContext);

export { useWeather, WeatherProvider };
