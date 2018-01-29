import { DELETE_POST } from "./../actions/types";

const initialState = {};

function deletePostReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_POST:
      return action.payload;
    default:
      return state;
  }
}

export default deletePostReducer;
