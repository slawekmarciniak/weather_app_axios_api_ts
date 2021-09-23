import axios from "axios";
const key = "wVGR9UsUbiesP037o51yiCcq4mGJQS2A";
const url = "http://dataservice.accuweather.com";

export const getAccuWeatherData = async (city: string) => {
  console.log(city);
  return axios
    .get(`${url}/locations/v1/cities/search?apikey=${key}&q=${city}`)
    .then((data) => {
      console.log(data);
      return axios
        .get(
          `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${data.data[0].Key}?apikey=${key}&metric=true`
        )
        .then((data) => {
          return data.data.DailyForecasts;
        });
    })
    .catch(function (error) {
      console.error(error);
    });
};
