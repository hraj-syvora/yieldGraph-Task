export const lineGraphData9mo = {
    labels: [
        "SEP16",
        "JUN17",
        "MAR18",
        "DEC19",
        "SEP20",
        "JUN21",
        "MAR22",
        "DEC23",
        "SEP24",
        "JUN25",
        "MAR26"
      ],
      
    datasets: [
      {
        label: "Current Yield",
        data: [
            2.8, 5.9, 7.5, 9.8, 11.2, 13.6, 15.4, 17.9, 19.3], 
        segment: {
          borderColor: "#0B40F0",
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
const currentYieldData = lineGraphData9mo.datasets[0].data;
const historicalYieldData = lineGraphData9mo.datasets[1].data;

export const barGraphData9mo = {
  labels: ["0M", "9M", "18M", "27M", "36M", "45M", "54M", "63M", "72M", "81M"],
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
