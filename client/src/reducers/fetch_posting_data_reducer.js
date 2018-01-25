import { FETCH_POST_DATA, FETCH_SINGLE_POST_DATA, FILTER_POST, SEARCH_POST } from "./../actions/types";

const initialState = [];

function postDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DATA:
      return action.payload;
    case FETCH_SINGLE_POST_DATA:
      return action.payload;
    case FILTER_POST:
      return action.payload;
    case SEARCH_POST:
      return action.payload;
    default:
      return state;
  }
}

export default postDataReducer;
