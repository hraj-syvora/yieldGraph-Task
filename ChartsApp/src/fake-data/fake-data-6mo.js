export const lineGraphData6mo = {
    labels: [
      "MAR22",
      "SEP22",
      "MAR23",
      "SEP23",
      "MAR24",
      "SEP24",
      "MAR25",
      "SEP25",
      "MAR25",
      "SEP25"
    ],
    datasets: [
      {
        label: "Current Yield",
        data: [
          2.1503, 5.2448, 6.1203, 8.4543, 9.2344, 11.3242, 13.3445, 15.5676,
          17.4654,
        ],
        segment: {
          borderColor: "#0B40F0",
          //     borderDash: (ctx) =>
          //         lineGraphData.labels[ctx.p1.parsed.x] === "JUN24" ? [5, 7] : undefined,
        },
        spanGaps: true,
        pointBackgroundColor: "0B40F0",
        pointRadius: 5,
        hoverRadius: 8,
        tension: 0.4,
      },
      {
        label: "1 Month Ago",
        data: [
          1.1503, 3.2448, 5.1203, 6.4543, 8.2344, 9.3242, 11.3445, 13.5676,
          15.4654,
        ],
        segment: {
          borderColor: "#10F0F7",
        },
        borderDash: [5, 7],
        spanGaps: true,
        pointBackgroundColor: "#10F0F7",
        fill: true,
        backgroundColor: "#D1FDFF",
        pointRadius: 5,
        hoverRadius: 8,
        tension: 0.4,
      },
    ],
};
const currentYieldData = lineGraphData6mo.datasets[0].data;
const historicalYieldData = lineGraphData6mo.datasets[1].data;

export const barGraphData6mo = {
  labels: ["0M", "6M", "12M", "18M", "24M", "30M", "36M", "42M", "48M", "54M"],
  datasets: [
    {
      label: "Yield Spread",
      data: currentYieldData.map((current, index) => {
        return current - historicalYieldData[index];
      }),
      backgroundColor: "#10F0F7",
      barPercentage: 1.0,
      categoryPercentage: 1.0,
      barThickness: 20,
    },
  ],
};