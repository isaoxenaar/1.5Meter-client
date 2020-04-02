import request from "superagent";
import { baseUrl } from "./constants";
import { socketConnection } from "../components/GeoLocationContainer";

export const JWT = "JWT";

function newLogin(payload) {
  console.log("this is payload", payload);
  return {
    type: JWT,
    payload: { jwt: payload.jwt, userId: payload.userId }
  };
}

export const checkLogin = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = newLogin(response.body);
      dispatch(action);
      socketConnection.emit("user login", { userId: response.body.userId });
    })
    .catch(console.error);
};
