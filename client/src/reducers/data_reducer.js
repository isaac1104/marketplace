import { FETCH_DATA } from "./../actions/types";

const initialState = null;

function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}

export default dataReducer;
