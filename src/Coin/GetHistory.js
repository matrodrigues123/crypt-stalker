import axios from "axios"

export default async (coin, currency)=>{
    const API_KEY= "https://api.coingecko.com/api/v3"
    let info = []
    const res = await axios.get(`${API_KEY}/coins/${coin.toLowerCase()}/ohlc?vs_currency=${currency}&days=30`)
    
    console.log(res)
    for (let i= 0; i< res.data.length; i++){
        info.push(res.data[i][4])
    }
    
    
    return Promise.resolve(info)
    
}


