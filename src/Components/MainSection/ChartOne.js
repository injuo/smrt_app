import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartOne = () => {
  const series = [
    {
      name: "",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ];

  const options = {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
  
      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      },
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={200}
        // width={330}
      />
    </div>
  );
};

export default ChartOne;
