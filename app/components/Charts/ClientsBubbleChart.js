import {
  Chart as ChartJS, Tooltip, Legend, PointElement, LinearScale } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bubble } from "react-chartjs-2";
import ViewReportButton from "../reusable/ViewReportButton";

// Register chart components and plugins
ChartJS.register(Tooltip, Legend, PointElement, LinearScale, ChartDataLabels);

// Actual client counts
const counts = {
  Online: 3824,
  New: 60,
  Active: 40,
  InActive: 541,
};

// Bubble chart data
const data = {
  datasets: [
    {
      label: "Online",
      data: [{ x: 10, y: 40, r: 55 }],
      backgroundColor: "rgba(38, 71, 254, 0.59)", // Blue
    },
    {
      label: "New",
      data: [{ x: 45, y: 60, r: 15 }],
      backgroundColor: "rgba(251, 190, 36, 0.47)", // Yellow-orange
    },
    {
      label: "Active",
      data: [{ x: 65, y: 30, r: 25 }],
      backgroundColor: "rgba(22, 101, 52, 0.57)", // Green
    },
    {
      label: "InActive",
      data: [{ x: 35, y: 45, r: 80 }],
      backgroundColor: "rgba(220, 38, 38, 1)", // Red
    },
  ],
};

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: 0, 
  },
  plugins: {
    datalabels: {
      formatter: (value, context) => {
        const label = context.dataset.label;
        return `${counts[label]}`;
      },
      color: "#ffffffff",
      font: {
        weight: "bold",
        size: 11,
      },
    },
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.dataset.label;
          return `${label}: ${counts[label]}`;
        },
      },
    },
  },
  elements: {
    point: {
      borderWidth: 0,
    },
  },
  scales: {
    x: {
      display: false,
      min: 0,
      max: 100,
      grace: "5%",
    },
    y: {
      display: false,
      min: 0,
      max: 100,
      grace: "5%",
    },
  },
  clip: false,
};

// Component
const ClientsBubbleChart = () => {
  return (
    <div className="bg-white rounded-md shadow-sm relative w-full h-full">
      <div className="flex px-4 py-2 justify-between items-center border-b border-gray-300">
        <h2 className="text-base font-semibold">CLIENTS</h2>
        <ViewReportButton text="Download Report" />
      </div>

      {/* Chart area */} 
      <div className="relative w-full h-64 flex items-center justify-center">
        <Bubble data={data} options={options} className="" />
      </div>

      {/* Legend */}
      <div className="flex px-4 pb-2 justify-center gap-4 mt-2 text-xs font-medium text-gray-600">
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#2647FE]"></span> Online
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#FBBF24]"></span> New
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#166534]"></span> Active
        </div>
        <div className="flex items-center gap-1">
          <span className="w-3 h-3 rounded-full bg-[#DC2626]"></span> InActive
        </div>
      </div>
    </div>
  );
};

export default ClientsBubbleChart;
