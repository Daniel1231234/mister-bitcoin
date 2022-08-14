export const userService = {
  getUser,
}

const user = {
  name: "shalom abu putin",
  coins: 100,
  moves: [],
}

function getUser() {
  let userToReturn = user
  return Promise.resolve(userToReturn)
}
