import axios from "axios";
import { SIGN_UP_USER } from "./types";

export const signUpUser = () => async dispatch => {
  const request = await axios.post("/server/functions.php", {
        type: "create-user",
        username: "isaac1104",
        password: "isaac",
        email: "isaac-kwon@hotmail.com",
        firstname: "isaac",
        lastname: "kwon",
        zipcode: 92602,
        phone: 5624844345
      });
  dispatch({ type: SIGN_UP_USER, payload: request });
}
