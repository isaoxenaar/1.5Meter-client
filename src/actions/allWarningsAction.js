import request from "superagent";
import { baseUrl } from "./constants";

export const ALL_WARNINGS = "ALL_WARNINGS";

function allWarnings(payload) {
  return {
    type: ALL_WARNINGS,
    payload
  };
}

export const getWarnings = () => (dispatch, getState) => {
  const state = getState();

  if (!state.warnings.length) {
    request(`${baseUrl}/warning`)
      .then(response => {
        const action = allWarnings(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};
