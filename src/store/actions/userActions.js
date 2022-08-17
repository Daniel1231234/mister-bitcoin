import { userService } from "../../services/userService"

export function spendAmount(amount) {
  return async (dispatch) => {
    dispatch({ type: "SPEND_AMOUNT", amount })
  }
}

export function getUser() {
  return async (dispatch) => {
    try {
      const user = userService.getUser()
      dispatch({ type: "SET_USER", user })
    } catch (err) {
      console.log(err)
    }
  }
}

// export function loadContacts() {
//     return async (dispatch, getState) => {
//       try {
//         const { filterBy } = getState().contactModule
//         const contacts = await contactService.getContacts(filterBy)
//         dispatch({ type: "SET_CONTACTS", contacts })
//       } catch (err) {
//         console.log("err:", err)
//       }
//     }
//   }
