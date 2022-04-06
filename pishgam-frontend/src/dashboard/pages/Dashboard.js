import { useCallback, useEffect, useState } from "react";
import ThingsList from "../components/ThingsList";
// import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  const [things, setThings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchThingsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://127.0.0.1:5000/api/v1/things");
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

      // const loadedThings = [];
      // for (const key in data) {
      //   loadedThings.push({
      //     id: key.id,
      //     title: data[key].title,
      //   });

      //   console.log(data);
      //   console.log(loadedThings);

      //   setThings(loadedThings);
      // }
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
    content = <ThingsList items={things} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  return (
    <>
      <section>{content}</section>
    </>
  );
};

export default Dashboard;
