import axios from "axios";
const key = "f6f495e1c73d707fa179ac81dbc8b510";
const url = "https://api.openweathermap.org/data/2.5/weather";

export const getOpenWeatherData = async (city: string) => {
  return axios
    .get(`${url}?q=${city}&units=metric&appid=${key}`)
    .then((data) => {
      console.log(data.data.main.temp);
      return data.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
