import { useState } from "react";
import { CityData } from "./CityData";
import { useWeather } from "../context/WeatherContext";

function Cities() {
  const { location, setLocation } = useWeather();

  const [selected, setSelected] = useState(CityData[39]["id"]);

  const handleChange = (event) => {
    const data = event.target.value - 1;
    setSelected(event.target.value);
    setLocation({
      lat: Number(CityData[data].lat),
      lon: Number(CityData[data].lon),
    });
  };

  return (
    <div>
      <select
        name="select-city"
        id="select-city"
        onChange={handleChange}
        defaultValue={selected}
      >
        {CityData.map((city) => (
          <option key={city.id} value={city.id}>
            {city.city}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Cities;
