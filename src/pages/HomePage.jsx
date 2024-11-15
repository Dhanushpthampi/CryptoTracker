// src/pages/HomePage.js
import React, { useEffect, useState } from "react";
import CryptoCard from "../components/CryptoCard";

const HomePage = () => {
  const [cryptoData, setCryptoData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptoData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,cardano,ripple,litecoin&order=market_cap_desc&per_page=10&page=1&sparkline=true"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data from CoinGecko");
        }

        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
        setCryptoData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="homepage">
      <h1>Crypto Tracker</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="crypto-container">
          {cryptoData.map((coin) => (
            <CryptoCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;
