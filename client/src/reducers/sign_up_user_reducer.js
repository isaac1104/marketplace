import { SIGN_UP_USER } from "./../actions/types";

const initialState = null

function signUpUserReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_USER:
      return action.payload;
    default:
      return state;
  }
}

export default signUpUserReducer;
