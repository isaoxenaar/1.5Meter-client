export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_DISTANCES":
      console.log("is this the others", action.payload);
      return action.payload;
    // case "NEW_COMMENT":
    //   return [action.payload, ...state];
    default:
      return state;
  }
}
