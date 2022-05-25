import { useCallback, useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import io from "socket.io-client";
import styles from "./LineChart.module.scss";
const socket = io.connect("http://localhost:4475");
// import silo from "./silo.json";

const LineChart = (props) => {
  const sendMessage = () => {
    socket.emit("send_message", { message: "hello" });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  const [thingValues, setThingValues] = useState([]);
  // var today = new Date();
  // var todayDate =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // const [todayValue, setTodayValue] = useState(todayDate);

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

      const lastValue = Object.values(transformedThingValues).pop();
      console.log(lastValue.value);

      setThingValues(transformedThingValues);
    } catch (err) {
      console.log(err);
    }
  }, [props.newDate, props.colName]);

  useEffect(() => {
    fetchThingValues();
  }, [fetchThingValues]);

  const series = [
    {
      name: "Weight",
      data: thingValues.map((value) => value.value),
    },
  ];

  console.log(series.data);

  const options = {
    chart: {
      type: "area",
      height: "100%",

      toolbar: {
        autoSelected: "zoom",
      },

      animation: {
        // animations: {
        //   enabled: true,
        //   easing: "easeinout",
        //   speed: 8000,
        // },
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

    dataLabels: {
      enabled: false,
    },

    stroke: {
      curve: "smooth",
      width: 3,
    },

    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.2,
        opacityTo: 0.2,
        stops: [100, 100],
      },
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
      tickAmount: 4,
      labels: {
        // format: "HH:mm",
        style: {
          colors: "#8e8da4",
        },
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

    // grid: {
    //   show: false,
    // },
  };

  return (
    <div className={styles.canvas}>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height="100%"
        // width="100%"
      />
      <button onClick={sendMessage}>Refresh</button>
    </div>
  );
};

export default LineChart;
