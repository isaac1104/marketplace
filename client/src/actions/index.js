import axios from "axios";
import { FETCH_DATA, POST_NEW_USER, RESET_USER_STATE, LOG_IN_USER, FETCH_POST_DATA } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/users/userdata.php");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}

export const  fetchPostData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/posts/postdata.php");
  const { data } = request;
  dispatch({ type: FETCH_POST_DATA, payload: data });
}

export const postNewUser = (username, password, firstname, lastname, email, zipcode, phone) => async dispatch => {
  const request = await axios.post("https://54.215.120.93/api/users/add.php", {
        username,
        password,
        firstname,
        lastname,
        email,
        zipcode,
        phone
      });
  const { success } = request.data;
  dispatch({ type: POST_NEW_USER, payload: success });
}

export const resetUserState = () => {
  return {
    type: RESET_USER_STATE,
    payload: null
  }
}

export const logInUser = (username, password) => async dispatch => {
  const request = await axios.post("https://54.215.120.93/api/users/auth.php", {
    username,
    password
  });
  const { data } = request;
  dispatch({ type: LOG_IN_USER, payload: data });
}
