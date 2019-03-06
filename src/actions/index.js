import { FETCH_CURRENT, FETCH_FORECAST, SET_COORDS } from './types';
import { openWeather } from '../api/openWeather';


export const fetchCurrentWeather = () => async dispatch => {
  const result = await openWeather.get(`weather?q=Barcelona&appid=${process.env.REACT_APP_WEATHER}`);
  dispatch({ type: FETCH_CURRENT, payload: result.data})
}

export const fetchCurrentWeatherFromCoords = (lat, lon) => async dispatch => {
  const result = await openWeather.get(`weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER}`);
  console.log(result.data)
  dispatch({ type: FETCH_CURRENT, payload: result.data})
}
export const fetchForecast = (id) => async dispatch => {
  const result = await openWeather.get(`forecast?id=${id}&appid=${process.env.REACT_APP_WEATHER}&units=metric`);
  dispatch({ type: FETCH_FORECAST, payload: result.data });
}

export const setCoords = (lat, lon) => dispatch => {
  const result = [lat, lon];
  dispatch ({ type: SET_COORDS, payload: result})
}
