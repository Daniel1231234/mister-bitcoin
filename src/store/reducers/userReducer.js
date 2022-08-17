const INITIAL_STATE = {
  loggedInUser: {
    name: null,
    coins: null,
    moves: [],
  },
}

export function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SPEND_COINS":
      const { loggedInUser } = state

      return {
        ...state,
        loggedInUser: {
          ...loggedInUser,
          coins: loggedInUser.coins - action.amount,
        },
      }

    case "SET_USER": {
      return {
        loggedInUser: action.loggedInUser,
      }
    }

    default:
      return state
  }
}
