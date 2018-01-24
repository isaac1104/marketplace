import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./data_reducer";
import postNewUserReducer from "./post_new_user_reducer";
import logInUserReducer from "./log_in_user_reducer";
import postDataReducer from "./fetch_posting_data_reducer";

const rootReducer = combineReducers({
  data: dataReducer,
  postData: postDataReducer,
  newUser: postNewUserReducer,
  logInUser: logInUserReducer,
  form: formReducer
});

export default rootReducer;
