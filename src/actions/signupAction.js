import request from "superagent";
import { baseUrl } from "./constants";
import { socketConnection } from "../components/GeoLocationContainer";

export const ADD_USER = "ADD_USER";

function newUser(payload) {
  return {
    type: ADD_USER,
    payload
  };
}

export const addUser = data => dispatch => {
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      console.log("this is response", response.body);
      dispatch(action);
    })
    .catch(console.error);
};
