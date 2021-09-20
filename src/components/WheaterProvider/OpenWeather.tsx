import { FC, useEffect } from "react";
import { getData } from "../../api/api";

interface OpenWeatherProps {}

const OpenWeather: FC<OpenWeatherProps> = () => {
  useEffect(() => {
    const getWeather = async () => {
      const data = await getData("Lonton");
      // setAllSubscribers(data);
      console.log(data);
      // setTimeout(() => setIsDataSet(true), 500);
    };
    getWeather();
  }, []);

  return <p>OpenWeather</p>;
};

export default OpenWeather;
