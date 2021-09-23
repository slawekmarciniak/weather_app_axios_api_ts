import { FC } from "react";
import { getOpenWeatherData } from "../../api/apiOpenWeather";
import WeatherLayout from "../WeatherLayout";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";

interface OpenWeatherProps {}

const OpenWeather: FC<OpenWeatherProps> = () => {
  const { openWeatherData, setOpenWeatherData, city, handleInputChange } =
    useContext(AppContext);

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
    return setOpenWeatherData(wheaterParameters);
  };

  const handleClick = () => {
    const getWeather = async () => {
      const data = await getOpenWeatherData(city);
      groupWeatherData(data);
    };
    getWeather();
  };

  return (
    <div style={{ backgroundColor: "green" }}>
      <input onChange={handleInputChange} type="text" value={city} />
      <button onClick={handleClick}>find</button>
      <WeatherLayout weather={openWeatherData} />
    </div>
  );
};

export default OpenWeather;
