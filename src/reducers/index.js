import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';

export default combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer
}); 