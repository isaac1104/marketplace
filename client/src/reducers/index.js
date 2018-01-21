import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./data_reducer";
import postNewUserReducer from "./post_new_user_reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  newUser: postNewUserReducer,
  form: formReducer
});

export default rootReducer;
