import { FETCH_POST_DATA, FETCH_SINGLE_POST_DATA, FILTER_POST, SEARCH_POST } from "./../actions/types";

const initialState = {
  data: [],
  post: ""
};

function postDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_POST_DATA:
      return {
        ...state,
        data: action.payload
      }
    case FETCH_SINGLE_POST_DATA:
      return {
        ...state,
        post: action.payload
      }
    case FILTER_POST:
      return {
        ...state,
        data: action.payload
      }
    case SEARCH_POST:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state;
  }
}

export default postDataReducer;
