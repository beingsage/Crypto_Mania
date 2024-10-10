crypto_global_market_data









const fetch = require('node-fetch');

const url = 'https://api.coingecko.com/api/v3/global';
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-xyGayiVDoe5CLnPggDgMYPtU'}
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));