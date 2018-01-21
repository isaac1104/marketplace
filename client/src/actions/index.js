import axios from "axios";
import { FETCH_DATA, POST_NEW_USER } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("http://54.215.120.93/functions.php?type=userdata");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}

export const postNewUser = () => async dispatch => {
  const request = await axios.post("http://54.215.120.93/functions.php?type=add-user", {
        username: "isaac1104",
        password: "isaac",
        email: "isaac-kwon@hotmail.com",
        firstname: "isaac",
        lastname: "kwon",
        zipcode: 92602,
        phone: 5624844345
      });
      console.log(request);
  dispatch({ type: POST_NEW_USER, payload: request });
}
