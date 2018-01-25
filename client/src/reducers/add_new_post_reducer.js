import { ADD_NEW_POST, RESET_POST_STATE } from "./../actions/types";

const initialState = {};

function addNewPostReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_POST:
      return action.payload;
    case RESET_POST_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default addNewPostReducer;
