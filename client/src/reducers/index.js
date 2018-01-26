import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postNewUserReducer from "./post_new_user_reducer";
import logInUserReducer from "./log_in_user_reducer";
import postDataReducer from "./fetch_posting_data_reducer";
import addNewPostReducer from "./add_new_post_reducer";

const rootReducer = combineReducers({
  postData: postDataReducer,
  newUser: postNewUserReducer,
  logInUser: logInUserReducer,
  newPost: addNewPostReducer,
  form: formReducer
});

export default rootReducer;
