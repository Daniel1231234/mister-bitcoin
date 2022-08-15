import axios from "axios"

const MARKET_URL = `https://api.blockchain.info/charts/market-price?timespan=5days&format=json&cors=true`

const TRANSACTIONS_URL =
  "https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true"

export const bitcoinService = {
  getRate,
  getMarketPlace,
  getConfirmedTransactions,
}

function getRate(coins) {
  return axios
    .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    .then((res) => res.data)
}

async function getMarketPlace() {
  try {
    const marketPlace = await axios.get(MARKET_URL)
    const { name, values } = marketPlace.data
    return { name, values }
  } catch (err) {
    console.log(err)
  }
}

async function getConfirmedTransactions() {
  try {
    const transactions = await axios.get(TRANSACTIONS_URL)
    const { name, values } = transactions.data
    return { name, values }
  } catch (err) {
    console.log(err)
  }
}
