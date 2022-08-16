import { legacy_createStore as createStore } from "redux"
import { contactReducer } from "./reducer/contactReducer"

export const store = createStore(contactReducer)

window.gStore = store
