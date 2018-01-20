import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import signUpUserReducer from "./sign_up_user_reducer";

const rootReducer = combineReducers({
  user: signUpUserReducer,
  form: formReducer
});

export default rootReducer;
