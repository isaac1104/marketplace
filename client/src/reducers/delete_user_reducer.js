import { DELETE_USER } from "./../actions/types";

const initialState = {};

function deleteUserReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_USER:
      return action.payload;
    default:
      return state;
  }
}

export default deleteUserReducer;
