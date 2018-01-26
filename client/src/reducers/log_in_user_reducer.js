import { LOG_IN_USER, LOG_IN_ERROR, RESET_LOGIN_STATE } from "./../actions/types";

const initialState = {
  data: "",
  loggedIn: ""
}

function logInUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        data: action.payload,
        loggedIn: true
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        data: "",
        loggedIn: action.payload
      };
    case RESET_LOGIN_STATE:
      return {
        ...state,
        data: "",
        loggedIn: action.payload
      }
    default:
      return state;
  }
}

export default logInUserReducer;
