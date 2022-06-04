import { useAppContext } from "../../../context/appContext";
import styles from "./Alert.module.scss";

const Alert = (props) => {
  const { alertType, alertText } = useAppContext();

  return (
    <div className={`${styles.alert} ${props.danger && styles.danger}`}>
      {alertText}
    </div>
  );
};

export default Alert;
