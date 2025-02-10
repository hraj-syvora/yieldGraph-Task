export const lineGraphData3mo = {
    labels: [
      "SEP23",
      "DEC23",
      "MAR24",
      "JUN24",
      "SEP24",
      "DEC24",
      "MAR24",
      "JUN24",
      "SEP24",
      "DEC24"
    ],
    datasets: [
      {
        label: "Current Yield",
        data: [
          2.5, 5.8, 7.2, 9.1, 10.5, 12.3, 14.0, 16.2, 18.4,
        ],
        segment: {
          borderColor: "#0B40F0",
        },
        spanGaps: true,
        pointBackgroundColor: "#0B40F0",
        pointRadius: 5,
        hoverRadius: 8,
        tension: 0.4,
      },
      {
        label: "1 Month Ago",
        data: [
          1.8, 3.9, 5.7, 7.3, 9.0, 10.6, 12.5, 14.8, 16.9,
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
const currentYieldData = lineGraphData3mo.datasets[0].data;
const historicalYieldData = lineGraphData3mo.datasets[1].data;

export const barGraphData3mo = {
  labels: ["0M", "3M", "6M", "9M", "12M", "15M", "18M", "21M", "24M", "27M"],
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