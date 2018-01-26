import { EDIT_POST, RESET_POST_STATE } from "./../actions/types";

const initialState = {};

function editPostReducer(state = initialState, action) {
  switch (action.type) {
    case EDIT_POST:
      return action.payload;
    case RESET_POST_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default editPostReducer;
