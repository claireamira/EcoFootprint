import React, { useEffect, useState } from "react";
import {database} from "../firebase.jsx"
import { ref, onValue } from "firebase/database";
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import Navbar from "./Navbar";
import './ResultsStyling.css';

const ResultsPage = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const carbonFootprintRef = ref(database, 'carbonFootprints');
    onValue(carbonFootprintRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const entries = Object.entries(data).map(([key, value]) => ({ ...value, id: key }));
        const sortedEntries = entries.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 7);

        // Ensure the entries array has exactly 7 items by filling with null or empty values if needed
        while (sortedEntries.length < 7) {
          sortedEntries.push({ transportCarbon: 0, foodCarbon: 0, wasteCarbon: 0, fashionCarbon: 0, totalCarbon: 0 });
        }

        const transportData = sortedEntries.map(entry => entry.transportCarbon).reverse();
        const foodData = sortedEntries.map(entry => entry.foodCarbon).reverse();
        const wasteData = sortedEntries.map(entry => entry.wasteCarbon).reverse();
        const fashionData = sortedEntries.map(entry => entry.fashionCarbon).reverse();
        const totalData = sortedEntries.map(entry => entry.totalCarbon).reverse();
        const labels = Array.from({ length: 7 }, (_, i) => `Week ${i + 1}`);

        setChartData({
          labels,
          datasets: [
            {
              type: 'bar',
              label: 'Transport Carbon Footprint',
              data: transportData,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
              type: 'bar',
              label: 'Food Carbon Footprint',
              data: foodData,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
            {
              type: 'bar',
              label: 'Waste Carbon Footprint',
              data: wasteData,
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
              type: 'bar',
              label: 'Fashion Carbon Footprint',
              data: fashionData,
              backgroundColor: 'rgba(255, 206, 86, 0.6)',
            },
            {
              type: 'line',
              label: 'Total Carbon Footprint',
              data: totalData,
              backgroundColor: 'rgba(75, 192, 192, 1)',
              borderColor: 'rgba(75, 192, 192, 1)',
              fill: false,
            }
          ],
        });
      }
    });
  }, []);

  return (
    <>
      <div className="container">
        <h1>My Historical Carbon Footprint Data</h1>
        {chartData && (
          <div className="chart-container">
            <Bar data={chartData} />
          </div>
        )}
      </div>
    </>
  );
};

export default ResultsPage;
