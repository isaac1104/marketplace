import axios from "axios";
import { FETCH_DATA, POST_NEW_USER, RESET_SIGNUP_STATE } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/users/userdata.php");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
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

export const resetSignUpState = () => {
  return {
    type: RESET_SIGNUP_STATE,
    payload: null
  }
}
