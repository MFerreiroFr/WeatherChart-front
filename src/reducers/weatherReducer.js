import { FETCH_CURRENT } from '../actions/types';

export default (state = null, action) => {
  switch(action.type) {
    case FETCH_CURRENT:
      return action.payload || state;
    default:
      return state;
  }
}