import { makeId } from "./utilService"
import { storageService } from "./storageService.js"

export const userService = {
  getUser,
  signUp,
  addMoves,
  getEmptyUser,
  saveMove,
  updateCoins,
}
const KEY = "user_db"

function _createUser() {
  return {
    name: "shalom masala",
    coins: 100,
    moves: [],
  }
}

function getUser() {
  let userToReturn = storageService.load(KEY)
  if (!userToReturn) return _createUser()
  return userToReturn
}

function getEmptyUser() {
  const user = {
    name: "",
    coins: 100,
    moves: [],
  }
  return user
}

function signUp(user) {
  storageService.store(KEY, user)
}

function addMoves(contact, amount) {
  const newMove = {
    toId: makeId(),
    to: contact,
    at: new Date(Date.now()),
    amount,
  }
  return newMove
}

function saveMove(move) {
  const user = getUser()
  const userToSave = JSON.parse(JSON.stringify(user))
  console.log(user)
  userToSave.moves.push(move)
  storageService.store(KEY, userToSave)

  return userToSave
}

function updateCoins({ amount }) {
  const user = getUser()
  const userToSave = JSON.parse(JSON.stringify(user))
  userToSave.coins -= amount
  console.log(userToSave)
  storageService.store(KEY, userToSave)
  return userToSave
}
