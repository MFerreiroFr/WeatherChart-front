import Axios from "axios";

export const openWeather = Axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5'
});
