import { FC, useState } from "react";
import { getWeatherbitApiData } from "../../api/apiWeatherbit";
import WeatherLayout from "../WeatherLayout";

interface WeatherbitProps {}

const Weatherbit: FC<WeatherbitProps> = () => {
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState("");

  const groupWeatherData = (data: any) => {
    console.log(data);
    const temperatures = [];
    for (let i = 0; i < data.length; i++) {
      temperatures.push({
        name: data[i].datetime,
        details: `temp ${data[i].temp}c, ${data[0].weather.description} `,
      });
    }
    return setWeather(temperatures);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);

  const handleClick = () => {
    const getWeather = async () => {
      const data = await getWeatherbitApiData(city);
      groupWeatherData(data);
    };
    getWeather();
  };

  return (
    <div>
      <input onChange={handleInputChange} type="text" value={city} />
      <button onClick={handleClick}>find</button>
      <WeatherLayout weather={weather} />
    </div>
  );
};

export default Weatherbit;
