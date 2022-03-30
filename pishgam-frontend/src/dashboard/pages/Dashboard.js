import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import ThingsList from "../components/ThingsList";
import Login from "../components/user/Login";
import styles from "./Dashboard.module.scss";

const DUMMY_THINGS = [
  {
    id: "1",
    name: "Silo 1",
    value: 12000,
  },
  {
    id: "2",
    name: "Silo 2",
    value: 12000,
  },
  {
    id: "3",
    name: "Silo 3",
    value: 12000,
  },
  {
    id: "4",
    name: "Silo 4",
    value: 12000,
  },
];

const Dashboard = () => {
  const userID = useParams().userID;
  console.log(userID);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const openNewThingHandler = () => setIsLoggedIn(true);

  const closeNewThingHandler = () => setIsLoggedIn(false);

  return (
    <>
      {isLoggedIn && <ThingsList items={DUMMY_THINGS} />}
      {!isLoggedIn && <Login />}
    </>
  );
};

export default Dashboard;
