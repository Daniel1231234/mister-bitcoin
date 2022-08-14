import axios from "axios"

const URL = `https://api.blockchain.info/charts/market-price?timespan=5days&format=json&cors=true`

export const bitcoinService = {
  getRate,
  getMarketPlace,
  getConfirmedTransactions,
}

function getRate(coins) {
  console.log(coins)
  return axios
    .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .then((res) => res.data)
}

async function getMarketPlace() {
  try {
    const marketPlace = await axios.get(URL)
    const { name, values } = marketPlace.data

    const priceX = values.map((data) => data.x)

    const priceY = values.map((data) => data.y)

    return { name, priceX, priceY }
  } catch (err) {
    console.log(err)
  }
}

function getConfirmedTransactions() {}
