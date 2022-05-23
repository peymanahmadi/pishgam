import styles from "./Alert.module.scss";

const Alert = (props) => {
  return (
    <div className={`${styles.alert} ${props.danger && styles.danger}`}>
      alert goes here
    </div>
  );
};

export default Alert;
