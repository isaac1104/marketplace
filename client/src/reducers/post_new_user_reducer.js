import { POST_NEW_USER } from "./../actions/types";

const initialState = null;

function postNewUserReducer(state = initialState, action) {
  switch (action.type) {
    case POST_NEW_USER:
      return action.payload;
    default:
      return state;
  }
}

export default postNewUserReducer;
