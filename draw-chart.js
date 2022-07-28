function drawChart1(xValues, yValuesList) {
  new Chart("chart1", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "ETr_mm",
          data: yValuesList[0],
          borderColor: "red",
          fill: false,
          yAxisID: "left",
        },
        {
          label: "ETc_mm",
          data: yValuesList[1],
          borderColor: "green",
          fill: false,
          yAxisID: "left",
        },
        {
          label: "7 per. Mov. Avg (VPDmax)",
          data: yValuesList[2],
          borderColor: "blue",
          fill: false,
          yAxisID: "right",
          borderDash: [30, 30],
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      scales: {
        left: {
          type: "linear",
          display: true,
          position: "left",
          min: 0,
        },
        right: {
          type: "linear",
          display: true,
          position: "right",
          min: -2000,
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  });
}

function drawChart2(xValues, yValuesList) {
  new Chart("chart2", {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "Tmax_F",
          data: yValuesList[0],
          borderColor: "red",
          fill: false,
          yAxisID: "left",
        },
        {
          label: "Tmin_F",
          data: yValuesList[1],
          borderColor: "green",
          fill: false,
          yAxisID: "left",
        },
        {
          label: "GDD_cum",
          data: yValuesList[2],
          borderColor: "blue",
          fill: false,
          yAxisID: "right",
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      scales: {
        left: {
          type: "linear",
          display: true,
          position: "left",
          min: 0,
        },
        right: {
          type: "linear",
          display: true,
          position: "right",
          min: 0,
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  });
}

function drawChart3(xValues, yValuesList) {
  new Chart("chart3", {
    data: {
      labels: xValues,
      datasets: [
        {
          type: "bar",
          label: "Precip_mm",
          data: yValuesList[0],
          borderColor: "red",
          fill: false,
          yAxisID: "left",
        },
        {
            type: "line",
          label: "Precip Cum",
          data: yValuesList[1],
          borderColor: "green",
          fill: false,
          yAxisID: "right",
        },
        {
            type: "line",
          label: "Etc cum",
          data: yValuesList[2],
          borderColor: "blue",
          fill: false,
          yAxisID: "right",
        },
        {
            type: "line",
          label: "Water_Required",
          data: yValuesList[3],
          borderColor: "blue",
          fill: false,
          yAxisID: "right",
          borderDash: [5, 5],
        },
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      stacked: false,
      scales: {
        left: {
          type: "linear",
          display: true,
          position: "left",
          min: 0,
        },
        right: {
          type: "linear",
          display: true,
          position: "right",
          min: 0,
          // grid line settings
          grid: {
            drawOnChartArea: false, // only want the grid lines for one axis to show up
          },
        },
      },
    },
  });
}

function drawChart4(xValues, yValuesList) {
  new Chart("chart4", {
    data: {
      labels: xValues,
      datasets: [
        {
          type: "bar",
          label: "Kc",
          data: yValuesList[0],
          backgroundColor: "red"
        },
        {
            type: "line",
          label: "7 per. Mov. Avg (Kc)",
          data: yValuesList[1],
          borderColor: "green",
          fill: false
        }
      ],
    },
    options: {
      responsive: true,
      interaction: {
        mode: "index",
        intersect: false,
      },
      scales: {
        y: {
          max: 4,
        }
      }
    },
  });
}
