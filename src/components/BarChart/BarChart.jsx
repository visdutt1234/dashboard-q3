import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const data = {
    labels: ["Requested", "Reviewal Pending", "Overdue", "Rejected", "Accepted"],
    datasets: [
      {
        label: "Status Count",
        data: [26, 3, 10, 2, 11],
        backgroundColor: ["blue", "gold", "darkred", "red", "green"],
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 40,
        ticks: {
          stepSize: 10,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default BarChart;
