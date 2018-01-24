import { FETCH_POST_DATA, FETCH_SINGLE_POST_DATA } from "./../actions/types";

const initialState = null;

function postDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DATA:
      return action.payload;
    case FETCH_SINGLE_POST_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default postDataReducer;
