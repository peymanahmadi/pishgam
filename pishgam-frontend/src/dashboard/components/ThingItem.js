// import { useState } from "react";
import Card from "../../shared/components/FormElements/Card";
import LineChart from "./chart/LineChart";
// import Footer from "./footer/Footer";
import Header from "./header/Header";
// import styles from "./ThingItem.module.scss";

const ThingItem = (props) => {
  // const today = new Date();
  // let todayDate =
  //   today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // const [newDate, setNewDate] = useState(todayDate);
  // const onChangeDate = (date) => {
  //   setNewDate(date);
  // };
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Card>
        <Header title={props.title} value={props.value} />
        <LineChart colName={props.colName} newDate={props.date} />
        {/* <Footer onChangeDate={onChangeDate} /> */}
      </Card>
    </div>
  );
};

export default ThingItem;
