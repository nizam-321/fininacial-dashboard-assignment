import React from 'react';
import ViewReportButton from '../reusable/ViewReportButton';
import { Chart as ChartJS, CategoryScale, LinearScale, BarController, BarElement, LineElement, PointElement, Legend, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register( CategoryScale, LinearScale, BarController, BarElement, LineElement, PointElement, Tooltip, Legend );

const SIPBusinessChart = () => {
  const data = {
    labels: ['Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        type: 'bar',
        label: 'Bar Data',
        data: [1.5, 1.6, 1.6, 1.6],
        backgroundColor: '#3B82F6', 
        yAxisID: 'y',
        borderRadius: 4,
        barPercentage: 0.5,
      },
      {
        type: 'line',
        label: 'Line Data',
        data: [120, 100, 100, 100],
        borderColor: '#EF4444', // Tailwind's red-500
        backgroundColor: '#EF4444',
        yAxisID: 'y1',
        tension: 0.4,
        fill: false,
        pointRadius: 0,
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
        type: 'linear',
        position: 'left',
        min: 0,
        max: 2.4,
        ticks: {
          stepSize: 0.8,
        },
        grid: {
          drawOnChartArea: true,
        },
      },
      y1: {
        type: 'linear',
        position: 'right',
        min: 90,
        max: 120,
        ticks: {
          stepSize: 10,
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="bg-white shadow-sm border border-gray-200 rounded-md w-full h-full">
      <div className="flex px-4 py-2 justify-between items-center border-b border-gray-300 mb-12 ">
        <h2 className="text-sm font-semibold text-gray-800 uppercase">SIP BUSINESS CHART</h2>
        <ViewReportButton/>
      </div>
      <Chart type='bar' data={data} options={options} />
    </div>
  );
};

export default SIPBusinessChart;

