import { useRef, useState } from "react";
import styles from "./Footer.module.scss";
import Button from "../../../shared/components/FormElements/Button";

const Footer = (props) => {
  const dateRef = useRef("");
  const today = new Date();
  let todayDate =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const inputChangeHandler = () => {
    props.onChangeDate(dateRef.current.value);
  };

  const buttonOnClickHandler = () => {
    props.onChangeDate(todayDate);
  };
  return (
    <div className={styles.footer}>
      <input type="date" onChange={inputChangeHandler} ref={dateRef} />
      <Button inverse small onClick={buttonOnClickHandler}>
        Today
      </Button>
    </div>
  );
};

export default Footer;
