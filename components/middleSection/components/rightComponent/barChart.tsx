"use client";
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const CustomBarChart = () => {
  const data = {
    labels: ['Matam', 'Matoto', 'Kaloum', 'Camayenne'],
    datasets: [
      {
        label: 'Sales',
        data: [300, 400, 500, 600],
        backgroundColor: 'rgba(0, 128, 255, 0.6)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Agence Commmerciale',
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '300px', marginTop:10, padding:10, borderRadius:20 }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CustomBarChart;
