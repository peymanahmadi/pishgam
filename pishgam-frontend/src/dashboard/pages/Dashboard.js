import { useCallback, useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
// import "flatpickr/dist/themes/material_green.css";
import "flatpickr/dist/flatpickr.css";

import ThingsList from "../components/ThingsList";
import styles from "./Dashboard.module.scss";
import Card from "../../shared/components/FormElements/Card";
// import Register from "../components/user/Register";

const Dashboard = () => {
  const [things, setThings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState(new Date());

  const options = {
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d",
    defaultDate: [date],
    onChange: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to", "-");
      setDate(instance.element.value);
    },
    onReady: (selectedDates, dateStr, instance) => {
      instance.element.value = dateStr.replace("to, " - "");
      setDate(instance.element.value);
    },
  };

  const fetchThingsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://iot.thingssolution.com/api/v1/things"
      );
      // const response = await fetch("http://127.0.0.1:4475/api/v1/things");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      const transformedThings = data.things.map((thing) => {
        return {
          key: thing.id,
          id: thing.id,
          colName: thing.colName,
          title: thing.title,
        };
      });
      setThings(transformedThings);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  }, []);
  useEffect(() => {
    fetchThingsHandler();
  }, [fetchThingsHandler]);

  let content = <p>Found no things.</p>;
  if (things.length > 0) {
    content = <ThingsList date={date} items={things} />;
    // console.log("Date: " + date);
  }

  if (error) {
    content = <p style={{ textAlign: "center" }}>{error}</p>;
  }

  if (isLoading) {
    content = <p style={{ textAlign: "center" }}>Loading...</p>;
  }
  return (
    <>
      <div className={styles.container}>
        <Card className={styles.card}>
          <h3>Here is what's happening with your projects</h3>
          <Flatpickr className={styles.flatPickr} options={options} />
        </Card>
        <section>{content}</section>
      </div>
    </>
  );
};

export default Dashboard;
