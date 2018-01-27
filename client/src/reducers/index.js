import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import postNewUserReducer from "./post_new_user_reducer";
import logInUserReducer from "./log_in_user_reducer";
import postDataReducer from "./fetch_posting_data_reducer";
import addNewPostReducer from "./add_new_post_reducer";
import editPostReducer from "./edit_post_reducer";
import commentDataReducer from "./fetch_comment_data_reducer";
import addNewCommentReducer from "./add_new_comment_reducer";
import deleteCommentReducer from "./delete_comment_reducer";

const rootReducer = combineReducers({
  postData: postDataReducer,
  newUser: postNewUserReducer,
  logInUser: logInUserReducer,
  newPost: addNewPostReducer,
  editPost: editPostReducer,
  commentData: commentDataReducer,
  newComment: addNewCommentReducer,
  deleteComment: deleteCommentReducer,
  form: formReducer
});

export default rootReducer;
