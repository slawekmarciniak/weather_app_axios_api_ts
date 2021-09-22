import { FC, useEffect, useState } from "react";
import { getAccuWeatherData } from "../../api/apiAccuWeather";
import WeatherLayout from "../WeatherLayout";

interface AccuWeatherProps {}

const AccuWeather: FC<AccuWeatherProps> = () => {
  const [weather, setWeather] = useState<any>();
  const [city, setCity] = useState("");

  useEffect(() => {
    setWeather(null);
  }, []);

  const groupWeatherData = (data: any) => {
    console.log(data);

    const temperatures = [];
    for (let i = 0; i < data.length; i++) {
      temperatures.push({
        name: data[i].Date.slice(0, 10),
        details: `min temp: ${data[i].Temperature.Minimum.Value}c, max temp: ${data[i].Temperature.Maximum.Value}c`,
      });
    }
    return setWeather(temperatures);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setCity(e.target.value);

  const handleClick = () => {
    const getData = async () => {
      const data = await getAccuWeatherData(city);
      groupWeatherData(data);
    };
    getData();
  };

  return (
    <div style={{ backgroundColor: "red" }}>
      <input onChange={handleInputChange} type="text" value={city} />
      <button onClick={handleClick}>find</button>
      <WeatherLayout weather={weather} />
    </div>
  );
};

export default AccuWeather;
