// src/components/CarbonFootprintChart.js
import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

const CarbonFootprintChart = ({ data }) => {
  const chartData = {
    labels: ['Transport', 'Food & Beverage', 'Waste', 'Fashion'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [
          data.transportCarbonFootprint || 0,
          data.foodCarbonFootprint || 0,
          data.wasteCarbonFootprint || 0,
          data.fashionCarbonFootprint || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      }
    ],
  };

  const pieChartData = {
    labels: ['Transport', 'Food & Beverage', 'Waste', 'Fashion'],
    datasets: [
      {
        label: 'Carbon Footprint (kg CO2)',
        data: [
          data.transportCarbonFootprint || 0,
          data.foodCarbonFootprint || 0,
          data.wasteCarbonFootprint || 0,
          data.fashionCarbonFootprint || 0
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
        borderWidth: 1,
      }
    ],
  };

  return (
    <div>
      <h2>Carbon Footprint Visualization</h2>
      <div>
        <h3>Bar Chart</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>
      <div>
        <h3>Pie Chart</h3>
        <Pie data={pieChartData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default CarbonFootprintChart;
