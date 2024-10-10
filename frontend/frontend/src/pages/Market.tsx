import { useEffect, useState } from 'react';
import axios from 'axios';


interface MarketData {
  active_cryptocurrencies: number;
  markets: number;
  btcMarketCap: string;
  ethMarketCap: string;
  percentageDifference: number;
  rawData: {
    data: {
      total_market_cap: {
        usd: number;
        btc: number;
        eth: number;
      };
    };
  };
}


function Market() {
  const [data, setData] = useState<MarketData | null>(null); // Start with null for better control
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the backend API
  useEffect(() => {
    axios.get('http://localhost:3050/api/crypto')
      .then(response => {
        setData(response.data); // Get the data from the backend response
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch data from backend');
      });
  }, []);

  return (
    <div>
      <h1>Crypto Market Data</h1>

      {/* Handle loading and errors */}
      {error ? (
        <p>{error}</p>
      ) : data ? (
        <div>
          <p><strong>Active Cryptocurrencies:</strong> {data.active_cryptocurrencies}</p>
          <p><strong>Markets:</strong> {data.markets}</p>
          <p><strong>BTC Market Cap:</strong> {data.btcMarketCap}</p>
          <p><strong>ETH Market Cap:</strong> {data.ethMarketCap}</p>
          <p><strong>Percentage Difference:</strong> {data.percentageDifference}%</p>

          <h2>Total Market Cap (USD)</h2>
          <p><strong>USD:</strong> {data.rawData.data.total_market_cap.usd}</p>
          <p><strong>BTC:</strong> {data.rawData.data.total_market_cap.btc}</p>
          <p><strong>ETH:</strong> {data.rawData.data.total_market_cap.eth}</p>
          
          {/* You can render more details as necessary */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Market;
