import { FC, useState } from "react";
import { getData } from "../../api/api";
import WeatherLayout from "../WeatherLayout";

interface OpenWeatherProps {}

const OpenWeather: FC<OpenWeatherProps> = () => {
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState("");

  const groupWeatherData = (data: any) => {
    const wheaterParameters = [
      {
        name: "sky",
        details: data.weather[0].description,
      },
      {
        name: "temperature",
        details: data.main.temp,
      },
      {
        name: "pressure",
        details: data.main.pressure,
      },
      {
        name: "wind",
        details: data.wind.speed,
      },
      {
        name: "humidity",
        details: data.main.humidity,
      },
    ];
    return setWeather(wheaterParameters);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);

  const handleClick = () => {
    const getWeather = async () => {
      const data = await getData(city);
      groupWeatherData(data);
    };
    getWeather();
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <input onChange={handleInputChange} type="text" value={city} />
      <button onClick={handleClick}>find</button>
      <WeatherLayout weather={weather} />
    </div>
  );
};

export default OpenWeather;
