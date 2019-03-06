import { SET_COORDS } from "../actions/types";

export default (state = [], action) => {
  switch(action.type) {
    case SET_COORDS:
      return action.payload;
    default:
      return state;
  }
}