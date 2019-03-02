import Axios from "axios";

export const currentWeather = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});

export const forecast = Axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/forecast?'
})