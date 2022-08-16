import axios from "axios"
import { storageService } from "./storageService.js"

const KEY = "bitcoin_db"

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  const { data } = await axios.get(
    `https://blockchain.info/tobtc?currency=USD&value=${coins}`
  )
  return data
}

async function getMarketPrice(type) {
  const bitcoinData = storageService.load(KEY) || {}
  if (bitcoinData.marketPrices) return bitcoinData.marketPrices
  return await _prepData("market-price")
}

async function getConfirmedTransactions() {
  const bitcoinData = storageService.load(KEY) || {}
  if (bitcoinData.confirmedTransactions)
    return bitcoinData.confirmedTransactions
  return await _prepData("n-transactions")
}

async function _prepData(type) {
  const res = await axios.get(
    `https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`
  )
  const { name, values } = res.data
  const bitcoinValues = values.map((value) => value.y)
  const resDetails = {
    name,

    values: bitcoinValues,
  }
  const bitcoinData = storageService.load(KEY) || {}
  bitcoinData[type] = resDetails
  storageService.store(KEY, bitcoinData)
  return resDetails
}

// const MARKET_URL = `https://api.blockchain.info/charts/market-price?timespan=5days&format=json&cors=true`

// const TRANSACTIONS_URL =
//   "https://api.blockchain.info/charts/n-transactions?timespan=5months&format=json&cors=true"

// export const bitcoinService = {
//   getRate,
//   getMarketPlace,
//   getConfirmedTransactions,
// }

// var marketPrice

// function getRate(coins) {
//   return axios
//     .get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
//     .then((res) => res.data)
// }

// async function getMarketPlace() {
//   try {
//     const prices = storageService.query("market_db")
//     console.log(prices)
//     if (prices) return prices
//     else {
//       const res = await axios.get(MARKET_URL)
//       marketPrice = res
//       console.log(marketPrice)
//       storageService._save("market_db", marketPrice)
//       const { name, values } = marketPrice.data
//       return { name, values }
//     }
//   } catch (err) {
//     console.log(err)
//   }
// }

// async function getConfirmedTransactions() {
//   try {
//     const transactions = await axios.get(TRANSACTIONS_URL)
//     const { name, values } = transactions.data
//     return { name, values }
//   } catch (err) {
//     console.log(err)
//   }
// }
