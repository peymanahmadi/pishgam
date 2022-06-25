import { useAppContext } from "../../../context/appContext";
import styles from "./Alert.module.scss";

const Alert = (props) => {
  const { alertType, alertText } = useAppContext();

  return (
    <div
      className={`${styles.alert}  ${
        alertType === "danger" ? styles.danger : styles.success
      }`}
    >
      {alertText}
    </div>
  );
};

export default Alert;
