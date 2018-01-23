import { LOG_IN_USER } from "./../actions/types";

const initialState = {
  data: null,
  loggedIn: false
}

function logInUserReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN_USER:
      return {
        ...state,
        data: action.payload,
        loggedIn: true
      }
    default:
      return state;
  }
}

export default logInUserReducer;
