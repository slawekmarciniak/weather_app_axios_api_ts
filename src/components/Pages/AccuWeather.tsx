import { FC, useContext } from "react";
import { getAccuWeatherData } from "../../api/apiAccuWeather";
import { AppContext } from "../../AppContext/AppContext";
import SearchInput from "../SearchInput";
import WeatherLayout from "../WeatherLayout";
import "./styles.css";

interface AccuWeatherProps {}

const AccuWeather: FC<AccuWeatherProps> = () => {
  const { city, accuWeatherData, setAccuWeatherData } = useContext(AppContext);

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
      if (data === "error") {
        alert("error! change city name or try again later");
        return;
      }
      groupWeatherData(data);
    };
    getData();
  };

  return (
    <div>
      <SearchInput handleClick={handleClick} />
      <div className="forecastType">5 days forecast: </div>
      {accuWeatherData && (
        <div>
          <WeatherLayout weather={accuWeatherData} />
        </div>
      )}
    </div>
  );
};

export default AccuWeather;
