import axios from "axios";
const key = "d37020fe74c84bd7961391c78be085da";
const url = "https://api.weatherbit.io/v2.0/forecast/daily";

export const getWeatherbitApiData = async (city: string) => {
  return axios
    .get(`${url}?city=${city}&key=${key}&days=16`)
    .then((data) => {
      return data.data.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
