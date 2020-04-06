export const ALL_DISTANCES = "ALL_DISTANCES";

function allDistances(payload) {
  return {
    type: ALL_DISTANCES,
    payload
  };
}
export const getDistances = theOthers => (dispatch, getState) => {
  const state = getState();

  if (!state.distances.length) {
    const action = allDistances(theOthers);
    dispatch(action);
  }
};
