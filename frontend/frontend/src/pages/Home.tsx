import { useEffect, useState } from 'react';
import axios from 'axios';
import Finnavbar from '../comp/Finnavbar';



interface CoinData {
  bitcoin: { usd: number };
  ethereum: { usd: number };
}

function Home() {
  const [data, setData] = useState<CoinData | null>(null); // Start with null for better control
  const [error, setError] = useState<string | null>(null);

  // Fetch data from the backend API
  useEffect(() => {
    axios.get('http://localhost:3050/api/coins')
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
      <Finnavbar/>
      <h1>Cryptocurrency Prices</h1>
      {error && <p>{error}</p>} {/* Display error message if there's an error */}
      
      {data ? (
        <>
          <div>
            <h2>Bitcoin</h2>
            <p>Price: ${data.bitcoin.usd}</p>
            <p>Currency: USD</p>
          </div>

          <div>
            <h2>Ethereum</h2>
            <p>Price: ${data.ethereum.usd}</p>
            <p>Currency: USD</p>
          </div>
        </>
      ) : (
        <p>Loading cryptocurrency data...</p>
      )}

      
    </div>
  );
}

export default Home;
