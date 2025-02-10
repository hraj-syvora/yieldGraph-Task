/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  BarElement,
  Title,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  BarElement,
  Title,
  LinearScale,
  CategoryScale,
  plugins
);

const BarGraph = ({ barGraphData }) => {
  const options = {
    maintainAspectRation: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (val) {
            return "Yield Spread: " + val.formattedValue + "%";
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        min: 0,
        border: {
          color: "#BDBDBD",
        },
        ticks: {
          color: "#BDBDBD",
          font: {
            weight: "bold",
            size: "12",
          },
        },
      },
      y: {
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          color: "#BDBDBD",
          font: {
            weight: "bold",
            size: "12",
          },
          padding: 5,
          stepSize: 3,
        },
        border: {
          color: "#BDBDBD",
        },
      },
    },
  };
  return <Bar options={options} data={barGraphData} />;
};

export default BarGraph;
