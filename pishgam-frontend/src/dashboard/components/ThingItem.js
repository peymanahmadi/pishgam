import { useState } from "react";
import Card from "../../shared/components/FormElements/Card";
import LineChart from "./chart/LineChart";
import Footer from "./footer/Footer";
import Header from "./header/Header";
// import styles from "./ThingItem.module.scss";

const ThingItem = (props) => {
  return (
    <Card>
      <Header title={props.title} value={props.value} />
      <LineChart colName={props.colName} />
      <Footer />
    </Card>
  );
};

export default ThingItem;
