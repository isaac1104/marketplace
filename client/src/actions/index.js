import axios from "axios";
import { FETCH_DATA, POST_NEW_USER, RESET_USER_STATE, LOG_IN_USER, FETCH_POST_DATA, FETCH_SINGLE_POST_DATA, LOG_IN_ERROR, RESET_LOGIN_STATE, ADD_NEW_POST, RESET_POST_STATE } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/users/userdata.php");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}

export const fetchPostData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/posts/postdata.php");
  const { data } = request;
  dispatch({ type: FETCH_POST_DATA, payload: data });
}

export const fetchSinglePostData = id => async dispatch => {
  const request = await axios.get(`https://54.215.120.93/api/posts/postdata.php?id=${id}`)
  const { data } = request;
  dispatch({ type: FETCH_SINGLE_POST_DATA, payload: data });
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
  const { data } = request;
  dispatch({ type: POST_NEW_USER, payload: data });
}

export const resetUserState = () => {
  return {
    type: RESET_USER_STATE,
    payload: {}
  }
}

export const logInUser = (username, password) => async dispatch => {
  const request = await axios.post("https://54.215.120.93/api/users/auth.php", {
    username,
    password
  });
  const { data } = request;
  if (data) {
    dispatch({ type: LOG_IN_USER, payload: data });
  } else {
    dispatch({ type: LOG_IN_ERROR, payload: false });
  }
}

export const resetLogIn = () => {
  return {
    type: RESET_LOGIN_STATE,
    payload: null
  }
}

export const addNewPost = (author, title, category, location, price, description) => async dispatch => {
  const request = await axios.post("https://54.215.120.93/api/posts/add.php", {
    author,
    title,
    category,
    location,
    price,
    description
  });
  const { data } = request;
  dispatch({ type: ADD_NEW_POST, payload: data });
}

export const resetPostState = () => {
  return {
    type: RESET_POST_STATE,
    payload: {}
  }
}
