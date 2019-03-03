import { FETCH_CURRENT } from './types';
import { currentWeather } from '../api/openWeather';
import keys from '../config/keys';

export const fetchCurrentWeather = () => async dispatch => {
  const result = await currentWeather.get(`weather?q=Barcelona&appid=${keys.weather}`);
  dispatch({ type: FETCH_CURRENT, payload: result.data})
}