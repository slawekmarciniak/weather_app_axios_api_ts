import { FC, useEffect, useState } from "react";
import { getData } from "../../api/api";
import WeatherLayout from "../WeatherLayout";

interface OpenWeatherProps {}

const OpenWeather: FC<OpenWeatherProps> = () => {
  const [weather, setWeather] = useState<any>();

  useEffect(() => {
    const getWeather = async () => {
      const data = await getData("Łódź");
      return setWeather(data);
    };
    getWeather();
  }, []);

  return (
    <div>
      <p>OpenWeather</p>
      <WeatherLayout />
    </div>
  );
};

export default OpenWeather;
