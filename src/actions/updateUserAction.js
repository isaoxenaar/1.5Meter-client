import superagent from "superagent";
import { baseUrl } from "./constants";

export const CHANGE_USER = "CHANGE_USER";

function changeUser(newUser) {
  return {
    type: CHANGE_USER,
    payload: newUser,
  };
}

export function updateUser(id, update) {
  return async function (dispatch) {
    try {
      const response = await superagent.put(`${baseUrl}/user`).send(update);

      const action = changeUser(response.body);

      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
}
