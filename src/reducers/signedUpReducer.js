export default function(state = [], action = {}) {
  switch (action.type) {
    case "ALL_USERS":
      console.log("is this allusers", action.payload);
      return action.payload;
    default:
      return state;
  }
}
