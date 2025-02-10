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
  Filler
} from "chart.js";
import { Line } from "react-chartjs-2";
import {lineGraphData} from "../FAKE_DATA";
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

const LineGraph = () => {
    const options = {
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(val) {
                        // console.log(val)
                        return 'Current APR: ' + val.formattedValue + '%';
                    },
                }
            }
        },
        scales: {
          y: {
            grid: {
                display: false,
            },
            ticks: {
              callback : function(value) {
                return value + '%';
              },
              padding: 5,
              stepSize: 5
            }
          }
        }
      };
  return (
    <Line options={options} data={lineGraphData}/>
  )
};

export default LineGraph;
