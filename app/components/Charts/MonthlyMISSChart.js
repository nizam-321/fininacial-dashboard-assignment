"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ViewReportButton from "../reusable/ViewReportButton";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

// Chart Data
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Red Line",
      data: [0.25, 0.23, 0.2, 0.18, 0.15, 0.12],
      borderColor: "rgba(255, 99, 132, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.1)",
      fill: true,
      tension: 0, // sharp edges
      pointRadius: 0,
    },
    {
      label: "Green Line",
      data: [0.2, 0.15, 0.3, 0.45, 0.55, 0.35],
      borderColor: "rgba(75, 192, 75, 1)",
      backgroundColor: "rgba(75, 192, 75, 0.1)",
      fill: true,
      tension: 0.4, // smooth
      pointRadius: 0,
    },
    {
      label: "Blue Line",
      data: [-0.1, 0.0, 0.1, 0.3, 0.45, 0.1],
      borderColor: "rgba(54, 162, 235, 1)",
      backgroundColor: "rgba(54, 162, 235, 0.1)",
      fill: true,
      tension: 0.4, // smooth
      pointRadius: 0,
    },
  ],
};

// Chart Options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      display: true,
      position: "top",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        boxWidth: 12,
        font: {
          size: 11,
        },
        color: "#666",
      },
    },
    tooltip: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: (tooltipItem) =>
          `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue} Cr`,
      },
    },
  },
  interaction: {
    mode: "nearest",
    intersect: false,
  },
  scales: {
    y: {
      min: -0.2,
      max: 0.6,
      ticks: {
        callback: (value) => `${value.toFixed(2)} Cr`,
        stepSize: 0.2,
        color: "#555",
        font: {
          size: 12,
        },
      },
      grid: {
        color: "#eee",
      },
    },
    x: {
      ticks: {
        color: "#555",
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

// Component
const MonthlyMISChart = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-md shadow-sm w-full h-full">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-200">
        <h2 className="text-sm font-semibold text-gray-800">MONTHLY MIS</h2>
        <ViewReportButton text="View Report" />
      </div>

      {/* Chart */}
      <div className="h-72 p-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default MonthlyMISChart;
