import ThingsList from "../components/ThingsList";
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
  return <ThingsList items={DUMMY_THINGS} />;
};

export default Dashboard;
