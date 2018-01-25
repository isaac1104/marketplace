import { ADD_NEW_POST } from "./../actions/types";

const initialState = {};

function addNewPostReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_POST:
      return action.payload;
    default:
      return state;
  }
}

export default addNewPostReducer;
