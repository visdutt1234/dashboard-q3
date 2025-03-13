import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "./DonutChart.scss";

ChartJS.register(ArcElement, Tooltip);

const DonutChart = () => {
  const values = [5, 2, 2, 1];
  const totalControls = values.reduce((acc, val) => acc + val, 0);

  const data = {
    datasets: [
      {
        data: values,
        backgroundColor: ["#3F9A26", "#F1C44D", "#DD4142", "#796DEB"],
        // hoverBackgroundColor: ["#218838", "#e0a800", "#c82333", "#5a32a3"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        bodyFont: {
          size: 14,
        },
        padding: 10,
        cornerRadius: 0,
      },
    },
  };

  return (
    <div className="donutchart">
      <div className="graph-right">
        <Doughnut data={data} options={options} />
      </div>
      <div className="graph-left">
        <h4>
          Completed Controls<span>{totalControls}</span>
        </h4>
        <ul>
          <li>
            <span className="icon" style={{ background: "#28a745" }}></span>Effective
            <span className="number">
              {values[0]} ({((values[0] / totalControls) * 100).toFixed(1)}%)
            </span>
          </li>
          <li>
            <span className="icon" style={{ background: "#ffc107" }}></span>Partial Effective
            <span className="number">
              {values[1]} ({((values[1] / totalControls) * 100).toFixed(1)}%)
            </span>
          </li>
          <li>
            <span className="icon" style={{ background: "#dc3545" }}></span>Non Effective
            <span className="number">
              {values[2]} ({((values[2] / totalControls) * 100).toFixed(1)}%)
            </span>
          </li>
          <li>
            <span className="icon" style={{ background: "#6f42c1" }}></span>Opportunity for
            Improvement
            <span className="number">
              {values[3]} ({((values[3] / totalControls) * 100).toFixed(1)}%)
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DonutChart;
