export const lineGraphData = {
    labels: ["SEP23", "DEC23", "Mar24", "JUN24", "SEP24", "DEC24","MAR25", "JUN25", "SEP25"],
  datasets: [
    {
      label: "Main Yield Curve",
      data: [2.1503, 5.2448, 6.1203, 8.4543, 9.2344, 11.3242, 13.3445, 15.5676, 17.4654],
      segment: {
        borderColor: '#0B40F0',
    //     borderDash: (ctx) =>
    //         lineGraphData.labels[ctx.p1.parsed.x] === "JUN24" ? [5, 7] : undefined,
      },
      spanGaps: true,
      pointBackgroundColor: "0B40F0",
      pointRadius: 5,
      hoverRadius: 8
    },
    {
      label: "Historical Yield Curve",
      data: [1.1503, 3.2448, 5.1203, 6.4543, 8.2344, 9.3242, 11.3445, 13.5676, 15.4654],
      segment: {
        borderColor: "#10F0F7",
      },
      borderDash: [5,7],
      spanGaps: true,
      pointBackgroundColor: "#10F0F7",
      fill: true,
      backgroundColor: '#D1FDFF',
      pointRadius: 5,
      hoverRadius: 8
    },
  ],
  
};
const currentYieldData = lineGraphData.datasets[0].data;
const historicalYieldData = lineGraphData.datasets[1].data;

export const barGraphData = {
 
    labels: ["0M", "3M", "6M", "9M", "12M", "15M", "18M", "21M", "24M"],
    datasets: [
      {
        label: "Yield Spread",
        data: currentYieldData.map((current, index) => {
            return current - historicalYieldData[index];
        }),
        backgroundColor: "red",
        barPercentage: 1.0,
        categoryPercentage: 1.0,
        barThickness: 10,
      },
    ],
  };
