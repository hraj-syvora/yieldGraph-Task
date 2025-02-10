import {
  Chart as ChartJS,
  BarElement,
  Title,
  LinearScale,
  CategoryScale,
  ArcElement,
  Tooltip,
  Legend,
  plugins
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {barGraphData} from "../FAKE_DATA";
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

const BarGraph = () => {
    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
                min: 0,
            },
          y: {
            ticks: {
              callback : function(value) {
                return value + '%';
              },
              padding: 5,
              stepSize: 3,
            },
            
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(val) {
                            return val.formattedValue + '%';
                        },
                    }
                }
            },
          }
        },
      };
  return <Bar options={options} data={barGraphData} />;
};

export default BarGraph;
