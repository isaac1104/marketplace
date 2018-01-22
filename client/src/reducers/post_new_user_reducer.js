import { POST_NEW_USER, RESET_SIGNUP_STATE } from "./../actions/types";

const initialState = null;

function postNewUserReducer(state = initialState, action) {
  switch (action.type) {
    case POST_NEW_USER:
      return action.payload;
    case RESET_SIGNUP_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default postNewUserReducer;
