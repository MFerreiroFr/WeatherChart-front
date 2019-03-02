import { FETCH_CURRENT } from './types';
import { currentWeather } from '../api/openWeather';
import keys from '../config/keys';

export const fetchCurrentWeather = () => async dispatch => {
  const cities = await currentWeather.get(`weather?q=Barcelona&appid=${keys.weather}`);
  console.log('cities: ', cities.data);
  dispatch({ type: FETCH_CURRENT, payload: cities.data})
}