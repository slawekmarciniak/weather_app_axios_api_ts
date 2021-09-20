import axios from "axios";
const key = "f6f495e1c73d707fa179ac81dbc8b510";
const url = "https://api.openweathermap.org/data/2.5/weather";

export const getData = async (city: string) => {
  axios
    .get(`${url}?q=${city}&appid=${key}`)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
