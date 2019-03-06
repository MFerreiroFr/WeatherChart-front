import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import forecastReducer from './forecastReducer';
import coordsReducer from './coordsReducer';

export default combineReducers({
  weather: weatherReducer,
  forecast: forecastReducer,
  coords: coordsReducer
}); 