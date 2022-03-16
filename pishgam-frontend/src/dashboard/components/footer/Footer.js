import { useRef } from "react";
import styles from "./Footer.module.scss";
import Button from "../../../shared/components/FormElements/Button";

const Footer = (props) => {
  const dateRef = useRef("");
  const inputChangeHandler = () => {
    props.onChangeDate(dateRef.current.value);
  };
  return (
    <div className={styles.footer}>
      <input type="date" onChange={inputChangeHandler} ref={dateRef} />
      <Button inverse>Today</Button>
    </div>
  );
};

export default Footer;
