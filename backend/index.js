// import dotenv from "dotenv"
// import connectDB from "./db/index.js";
// import {app} from './app.js'
// dotenv.config({
//     path: './.env'
// })



// connectDB()
// .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//         console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
//     })
// })
// .catch((err) => {
//     console.log("MONGO db connection failed !!! ", err);
// })












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


// //MY WORK >> MARKET ROUTE
// app.get('/api/crypto', async (req, res) => {
//     try {
//       const response = await axios.get('https://api.coingecko.com/api/v3/global');
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
 













  // app.get('/api/coins', async (req, res) => {
  //   try {
  //     const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
  //       params: {
  //         ids: 'bitcoin', // Specify which coins to fetch
  //         vs_currencies: 'usd' // Specify the currency (USD in this case)
  //       }
  //     });
      
  //    const data = response.data;
  //    

  //     res.json()); 
  //   }
  
  // catch (error) {
  //   res.status(500).json({ message: 'Error fetching data', error: error.message });}
  // });






  // app.get('/api/coins/market', async (req, res) => {
  //   //  const { vs_currency } = req.query; 
  //   try {
  //     const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
  //        params: {
  //        vs_currency: 'btc' // Specify the currency (USD in this case)
  //       //  ids: '01coin', // Specify which coins to fetch
  //       //  category: 'layer-1',
  //       //  order:'market_cap_asc',
  //       //  per_page:10,
  //       //  page:1,
  //       //  sparkline:true,
  //       //  price_change_percentage:'1hr',
  //       //  local:'en',
  //       //  precision:'10'
  //        }
  //     });
      
  //     // Send only the data field in the response
  //     res.json(response.data); 
  //   }
  
  // catch (error) {
  //   res.status(500).json({ message: 'Error fetching data', error: error.message });}


  // });










  


// app.get('/api/coins/categories', async (req, res)=>{

//      try{
//       const response = await axios.get('https://api.coingecko.com/api/v3/coins/categories',{
//         params:{
//           order:"market_cap_asc"
//         }
//       });
//       res.json(response.data.map(category => category.market_cap)); 
//      }
     
//      catch (error) {
//     res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });
















// app.get('/api/exchanges', async (req, res)=>{

//   try{
//    const response = await axios.get('https://api.coingecko.com/api/v3/exchanges')
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });





// app.get('/api/nfts', async (req, res)=>{

//   try{
//     const id = 'pudgy-penguins';
//    const response = await axios.get(`https://api.coingecko.com/api/v3/nfts/${id}`)
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });







// app.get('/api/derivatives', async (req, res)=>{

//   try{
//     // const id = 'pudgy-penguins';
//    const response = await axios.get(`https://api.coingecko.com/api/v3/derivatives/exchanges`)
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });






// app.get('/api/exchange_rates', async (req, res)=>{

//   try{
//     // const id = 'pudgy-penguins';
//    const response = await axios.get('https://api.coingecko.com/api/v3/exchange_rates');
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });















// app.get('/api/global_crypto', async (req, res)=>{

//   try{
//     // const id = 'pudgy-penguins';
//    const response = await axios.get('https://api.coingecko.com/api/v3/global');
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });







// app.get('/api/global_defi', async (req, res)=>{

//   try{
//    const response = await axios.get(`https://api.coingecko.com/api/v3/global/decentralized_finance_defi`);
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });






// app.get('/api/companies', async (req, res)=>{

//   try{
//      const coin_id = 'bitcoin';
//    const response = await axios.get(`https://api.coingecko.com/api/v3/companies/public_treasury/${coin_id}`);
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });









// app.get('/api/trending', async (req, res)=>{

//   try{
//    const response = await axios.get(`https://api.coingecko.com/api/v3/search/trending`);
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });







// app.get('/api/assest', async (req, res)=>{

//   try{
//    const response = await axios.get(`https://api.coingecko.com/api/v3/asset_platforms`);
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });











//COINBASE



// app.get('/api/assest', async (req, res)=>{

//   try{
//    const response = await axios.get(`https://api.coingecko.com/api/v3/asset_platforms`);
//    res.json(response.data); 
//   }
  
//   catch (error) {
//  res.status(500).json({ message: 'Error fetching data', error: error.message });}
// });





   








// Step 4: Create the first route (homepage route)
app.get('/', (req, res) => {
  res.send('Home Section');
});