import axios from 'axios';

export const bitcoinService = {
getRate,
getMarketPrice
}

async function getRate(coins){
   const res =  await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return res.data
}

async function getMarketPrice(){
    const marketPrice = localStorage.getItem('marketPrice')
    if(marketPrice) return Promise.resolve(JSON.parse(marketPrice))

    const res = await axios.get(`https://api.blockchain.info/charts/market-price?format=json&cors=true`)
    localStorage.setItem('marketPrice',JSON.stringify(res.data))
    return JSON.parse(res.data)
}