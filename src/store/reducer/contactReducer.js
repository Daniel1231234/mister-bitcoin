const INITIAL_STATE = {
  contact: null,
}

export function contactReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "SET_CONTACTS":
      return {
        ...state,
        contacts: action.contacts,
      }
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact._id !== action.contact._id
        ),
      }
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state, action.contact],
      }
    default:
      return state
  }
}
