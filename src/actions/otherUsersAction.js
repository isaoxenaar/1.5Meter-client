export const ALL_OTHERS = "ALL_OTHERS";

function allOthers(payload) {
  return {
    type: ALL_OTHERS,
    payload
  };
}
export const getOthers = (red, orange, green) => (dispatch, getState) => {
  const state = getState();
  const theOthers = { red: red, orange: orange, green: green };

  if (!state.others.length) {
    const action = allOthers(theOthers);
    dispatch(action);
  }
};
