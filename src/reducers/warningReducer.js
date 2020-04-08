export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_WARNINGS":
      console.log("is this allwarnings", action.payload);
      return action.payload;
    case "NEW_WARNING":
      return [action.payload, ...state];
    default:
      return state;
  }
}
