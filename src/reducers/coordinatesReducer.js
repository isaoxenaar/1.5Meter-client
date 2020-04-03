export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_DISTANCES":
      return action.payload;
    // case "NEW_COMMENT":
    //   return [action.payload, ...state];
    default:
      return state;
  }
}
