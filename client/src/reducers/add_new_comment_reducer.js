import { ADD_NEW_COMMENT } from "./../actions/types";

const initialState = {};

function addNewCommentReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return action.payload;
    default:
      return state;
  }
}

export default addNewCommentReducer;
