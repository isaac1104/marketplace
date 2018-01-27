import { DELETE_COMMENT } from "./../actions/types";

const initialState = {};

function deleteCommentReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_COMMENT:
      return action.payload;
    default:
      return state;
  }
}

export default deleteCommentReducer;
