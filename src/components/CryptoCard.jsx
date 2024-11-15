// src/components/CryptoCard.js
import React from "react";
import { Line } from "react-chartjs-2";
// Import necessary components from chart.js to register
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components with ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CryptoCard = ({ coin }) => {
  const chartData = {
    labels: coin.sparkline_in_7d.price.map((_, i) => i),  // Sample time series
    datasets: [
      {
        label: `${coin.name} Price`,
        data: coin.sparkline_in_7d.price,
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
    ],
  };

  return (
    <div className="crypto-card">
      <h2>{coin.name}</h2>
      <p>Current Price: ${coin.current_price.toLocaleString()}</p>
      <div className="chart-container">
        <Line data={chartData} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  );
};

export default CryptoCard;
