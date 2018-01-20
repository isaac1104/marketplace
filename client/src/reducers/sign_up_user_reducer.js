import { SIGN_UP_USER } from "./../actions/types";

const initialState = {
  user: {}
}

function signUpUserReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_USER:
      return state;
    default:
      return state;
  }
}

export default signUpUserReducer;
