import { FETCH_COMMENT_DATA, RESET_COMMENT_STATE } from "./../actions/types";

const initialState = {
  data: [],
  comment: ""
};

function commentDataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COMMENT_DATA:
      return {
        ...state,
        data: action.payload
      }
    case RESET_COMMENT_STATE:
      return action.payload;
    default:
      return state;
  }
}

export default commentDataReducer;
