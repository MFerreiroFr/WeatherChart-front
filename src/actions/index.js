import { FETCH_CURRENT, FETCH_FORECAST } from './types';
import { openWeather } from '../api/openWeather';
import keys from '../config/keys';

export const fetchCurrentWeather = () => async dispatch => {
  const result = await openWeather.get(`weather?q=Barcelona&appid=${keys.weather}`);
  dispatch({ type: FETCH_CURRENT, payload: result.data})
}

export const fetchForecast = () => async dispatch => {
  const result = await openWeather.get(`forecast?q=Barcelona&appid=${keys.weather}&units=metric`);
  dispatch({ type: FETCH_FORECAST, payload: result.data });
}