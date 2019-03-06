import { FETCH_CURRENT, FETCH_FORECAST } from './types';
import { openWeather } from '../api/openWeather';
import keys from '../config/keys';

export const fetchCurrentWeather = () => async dispatch => {
  const result = await openWeather.get(`weather?q=Barcelona&appid=${process.env.REACT_APP_WEATHER}`);
  dispatch({ type: FETCH_CURRENT, payload: result.data})
}

export const fetchForecast = () => async dispatch => {
  const result = await openWeather.get(`forecast?q=Barcelona&appid=${process.env.REACT_APP_WEATHER}&units=metric`);
  dispatch({ type: FETCH_FORECAST, payload: result.data });
}