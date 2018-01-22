import { LOG_IN_USER, RESET_LOG_IN_STATE } from "./../actions/types";

const initialState = null;

function logInUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER:
      return action.payload;
    case RESET_LOG_IN_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default logInUserReducer;
