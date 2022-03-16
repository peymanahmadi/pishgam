import ReactApexChart from "react-apexcharts";
import styles from "./LineChart.module.scss";
import silo from "./silo.json";

const LineChart = (props) => {
  const newDate = new Date(props.date);
  //   console.log(newDate);
  //   const res = silo.map((el) => new Date(el.dt).toLocaleDateString());
  //   console.log(res);
  const results = silo.filter((result) => new Date(result.dt) > newDate);
  console.log(results);
  //   console.log(props.date);
  //   console.log(Date.parse("2022-03-19T00:00:00.000Z"));

  const chartData = {
    series: [
      {
        name: "Weight",
        // data: silo.map((value) => value.value),
        data: results.map((value) => value.value),
      },
    ],

    options: {
      chart: {
        type: "area",
        toolbar: {
          autoSelected: "zoom",
        },
        animation: {
          initialAnimation: {
            enabled: true,
          },
        },
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
      },
      stroke: {
        curve: "smooth",
        width: 2,
      },
      xaxis: {
        type: "datetime",
        categories: silo.map((value) => value.dt),
        // categories: data1.times,
        labels: {
          format: "HH:mm",
        },
        axisBorder: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          format: "HH:mm",
        },
      },
      legend: {
        show: true,
      },
      tooltip: {
        enabled: true,
        shred: true,
        theme: "light",
        style: {
          fontSize: "12px",
        },
        x: {
          format: "HH:mm",
        },
      },
      grid: {
        show: false,
      },
    },
  };

  return (
    <div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        height="100%"
      />
    </div>
  );
};

export default LineChart;
