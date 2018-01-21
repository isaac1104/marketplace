import axios from "axios";
import { FETCH_DATA } from "./types";

export const fetchData = () => async dispatch => {
  const request = await axios.get("http://54.215.120.93/functions.php?type=userdata");
  const { data } = request;
  dispatch({ type: FETCH_DATA, payload: data });
}
