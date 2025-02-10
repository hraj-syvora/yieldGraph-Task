/* eslint-disable react/prop-types */
import {
  Chart as ChartJS,
  PointElement,
  LineElement,
  Title,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Title,
  LinearScale,
  CategoryScale,
  Filler
);

const LineGraph = ({ lineGraphData }) => {
  const options = {
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (val) {
            const dataSetIndex = val.dataSetIndex;
            if (dataSetIndex === 0)
              return "Current APR: " + val.formattedValue + "%";
            else return "1 Month Ago: " + val.formattedValue + "%";
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        border: {
          color: "#BDBDBD",
        },
        ticks: {
          callback: function (value) {
            return value + "%";
          },
          padding: 5,
          stepSize: 5,
          color: "#BDBDBD",
          font: {
            weight: "bold",
            size: "12",
          },
        },
      },
      x: {
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
    },
  };
  return <Line options={options} data={lineGraphData} />;
};

export default LineGraph;
