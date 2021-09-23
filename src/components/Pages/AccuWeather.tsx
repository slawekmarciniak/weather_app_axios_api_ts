import { FC } from "react";
import { getAccuWeatherData } from "../../api/apiAccuWeather";
import WeatherLayout from "../WeatherLayout";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import SearchInput from "../SearchInput";

interface AccuWeatherProps {}

const AccuWeather: FC<AccuWeatherProps> = () => {
  const { city, handleInputChange, accuWeatherData, setAccuWeatherData } =
    useContext(AppContext);

  const groupWeatherData = (data: any) => {
    const temperatures = [];
    for (let i = 0; i < data.length; i++) {
      temperatures.push({
        name: data[i].Date.slice(0, 10),
        details: `min temp: ${data[i].Temperature.Minimum.Value}c, max temp: ${data[i].Temperature.Maximum.Value}c`,
      });
    }
    return setAccuWeatherData(temperatures);
  };

  const handleClick = () => {
    const getData = async () => {
      const data = await getAccuWeatherData(city);
      groupWeatherData(data);
    };
    getData();
  };

  return (
    <div>
      <SearchInput handleClick={handleClick} />
      <WeatherLayout weather={accuWeatherData} />
    </div>
  );
};

export default AccuWeather;
