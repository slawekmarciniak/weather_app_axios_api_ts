import { FC } from "react";
import { getWeatherbitApiData } from "../../api/apiWeatherbit";
import WeatherLayout from "../WeatherLayout";
import { useContext } from "react";
import { AppContext } from "../../AppContext/AppContext";
import SearchInput from "../SearchInput";

interface WeatherbitProps {}

const Weatherbit: FC<WeatherbitProps> = () => {
  const { weatherbitData, setWeatherbitData, city } = useContext(AppContext);

  const groupWeatherData = (data: any) => {
    const temperatures = [];
    for (let i = 0; i < data.length; i++) {
      temperatures.push({
        name: data[i].datetime,
        details: `temp ${data[i].temp}c, ${data[0].weather.description} `,
      });
    }
    return setWeatherbitData(temperatures);
  };

  const handleClick = () => {
    const getWeather = async () => {
      const data = await getWeatherbitApiData(city);
      groupWeatherData(data);
    };
    getWeather();
  };

  return (
    <div>
      <SearchInput handleClick={handleClick} />
      {weatherbitData && (
        <div>
          <WeatherLayout weather={weatherbitData} />
        </div>
      )}
    </div>
  );
};

export default Weatherbit;
