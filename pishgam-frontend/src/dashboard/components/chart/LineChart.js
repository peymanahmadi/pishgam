import { useCallback, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
// import styles from "./LineChart.module.scss";
// import silo from "./silo.json";

const LineChart = (props) => {
  const [thingValues, setThingValues] = useState([]);
  var today = new Date();
  var todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  const [todayValue, setTodayValue] = useState(todayDate);

  // console.log(todayDate);

  const fetchThingValues = useCallback(async () => {
    try {
      // const response = await fetch(
      //   `http://127.0.0.1:5000/api/v1/thing/${props.colName}?date=${props.newDate}`
      // );
      const response = await fetch(
        `https://api.thingssolution.com/api/v1/thing/${props.colName}?date=${props.newDate}`
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedThingValues = data.thingValues.map((thingValue) => {
        return {
          key: thingValue.id,
          value: thingValue.value,
          dt: thingValue.setAt,
        };
      });
      // console.log(transformedThingValues);
      setThingValues(transformedThingValues);
      // const d = thingValues.map((value) => value.setAt);
      // console.log(d);
      console.log("Date " + props.newDate);
    } catch (err) {
      console.log(err);
    }
  }, [props.newDate, props.colName]);

  useEffect(() => {
    fetchThingValues();
  }, [fetchThingValues]);

  const chartData = {
    series: [
      {
        name: "Weight",
        data: thingValues.map((value) => value.value),
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
        categories: thingValues.map((value) => value.dt),
        labels: {
          datetimeUTC: false,
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
