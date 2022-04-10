import { useState } from "react";
import Card from "../../shared/components/FormElements/Card";
import LineChart from "./chart/LineChart";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import styles from "./ThingItem.module.scss";

const ThingItem = (props) => {
  const [newDate, setNewDate] = useState();
  const onChangeDate = (date) => {
    setNewDate(date);
  };
  return (
    <Card>
      <Header title={props.title} value={props.value} />
      <LineChart colName={props.colName} newDate={newDate} />
      <Footer onChangeDate={onChangeDate} />
    </Card>
  );
};

export default ThingItem;
