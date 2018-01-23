import { LOG_IN_USER } from "./../actions/types";

const initialState = null;

function logInUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER:
      return action.payload;
    default:
      return state;
  }
}

export default logInUserReducer;
