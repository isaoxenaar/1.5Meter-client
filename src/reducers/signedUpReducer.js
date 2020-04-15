export default function (state = [], action = {}) {
  switch (action.type) {
    case "ALL_USERS":
      console.log("is this allusers", action.payload);
      return action.payload;
    case "CHANGE_USER":
      const newState = state.map((user) => {
        const condition = user.id === action.payload.id;

        if (condition) {
          return action.payload;
        }
        return user;
      });

      return newState;
    default:
      return state;
  }
}
