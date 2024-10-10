import express from 'express';
import axios from 'axios';
import cors from 'cors';
import bodyParser from 'body-parser';
// import mongoose from 'mongoose';
// import { configDotenv } from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
const PORT = 3050;




// Step 5: Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


// app.get('/api/coins', async (req, res) => {
//     try {
//       const response_1 = await axios.get('https://api.coingecko.com/api/v3/simple/price');
//       // const response_2 = await axios.get('https://api.coingecko.com/api/v3/global');
//       // const response_3 = await axios.get('https://api.coingecko.com/api/v3/global');

//       // Some Operations
//       const data = response.data;
//       const btcMarketCap = data.data.total_market_cap.btc;
//       const ethMarketCap = data.data.total_market_cap.eth;
//       // Percentage difference
//       const percentageDifference = ((btcMarketCap - ethMarketCap) / ethMarketCap) * 100;

//       res.json({
        
//             active_cryptocurrencies: data.data.active_cryptocurrencies,
//             markets: data.data.markets,
//             btcMarketCap,
//             ethMarketCap,
//             percentageDifference, // This is the new processed data
//             rawData: response.data  // Send the entire original response under a key (like 'rawData')
        
//     });
//     } catch (error) {
//       res.status(500).json({ message: 'Error fetching data', error: error.message });
//     }
//   });
 


  app.get('/api/coins', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
        params: {
          ids: 'bitcoin,ethereum', // Specify which coins to fetch
          vs_currencies: 'usd' // Specify the currency (USD in this case)
        }
      });
      
      // Send only the data field in the response
      res.json(response.data); 
    }
  
  catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });}


  });

  



  app.get('/api/coins/market', async (req, res) => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
        params: {
          ids: 'bitcoin,ethereum', // Specify which coins to fetch
          vs_currencies: 'usd', // Specify the currency (USD in this case)
          order:'market_cap_acs',
          per_page:10,
          sparkline:true,
          price_change_percentage:'1hr',
          precision:'10'
        }
      });
      
      // Send only the data field in the response
      res.json(response.data); 
    }
  
  catch (error) {
    res.status(500).json({ message: 'Error fetching data', error: error.message });}


  });









// Step 4: Create the first route (homepage route)
app.get('/', (req, res) => {
  res.send('Home Section');
});