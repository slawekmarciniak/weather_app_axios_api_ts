import { FC } from "react";
import WeatherElement from "./WeatherElement";
import { v4 as uuidv4 } from "uuid";
import "./styles.css";

interface WeatherLayoutProps {
  weather: any;
}
const WeatherLayout: FC<WeatherLayoutProps> = ({ weather }) => {
  return (
    <div className="weatherContainer">
      {weather &&
        weather.map((e: object) => (
          <WeatherElement key={uuidv4()} weatherDetail={e} />
        ))}
    </div>
  );
};

export default WeatherLayout;
