import { FC, useContext } from "react";
import { getOpenWeatherData } from "../../api/apiOpenWeather";
import { AppContext } from "../../AppContext/AppContext";
import SearchInput from "../SearchInput";
import WeatherLayout from "../WeatherLayout";
import "./styles.css";

interface OpenWeatherProps {}

const OpenWeather: FC<OpenWeatherProps> = () => {
  const { openWeatherData, setOpenWeatherData, city } = useContext(AppContext);

  const groupWeatherData = (data: any) => {
    const wheaterParameters = [
      {
        name: "sky",
        details: data.weather[0].description,
      },
      {
        name: "temperature",
        details: `${data.main.temp} c`,
      },
      {
        name: "pressure",
        details: `${data.main.pressure} hPa`,
      },
      {
        name: "wind",
        details: `${data.wind.speed} km/h`,
      },
      {
        name: "humidity",
        details: `${data.main.humidity} %`,
      },
    ];
    return setOpenWeatherData(wheaterParameters);
  };

  const handleClick = () => {
    const getWeather = async () => {
      const data = await getOpenWeatherData(city);
      if (data === "error") {
        alert("error! please try again");
        return;
      }
      groupWeatherData(data);
    };
    getWeather();
  };

  return (
    <div>
      <SearchInput handleClick={handleClick} />
      <div className="forecastType">Todays forecast: </div>
      {openWeatherData && (
        <div>
          <WeatherLayout weather={openWeatherData} />
        </div>
      )}
    </div>
  );
};

export default OpenWeather;
