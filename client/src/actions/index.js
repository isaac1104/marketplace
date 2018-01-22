import axios from "axios";
import { FETCH_DATA, POST_NEW_USER } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("https://54.215.120.93/api/users/userdata.php");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}

export const postNewUser = (username, password, email, firstname, lastname, zipcode, phone) => async dispatch => {
  const request = await axios.post("https://54.215.120.93/api/users/add.php", {
        username,
        password,
        email,
        firstname,
        lastname,
        zipcode,
        phone
      });
  const { data } = request;
  console.log(request);
  console.log(data);
  dispatch({ type: POST_NEW_USER, payload: data });
}
