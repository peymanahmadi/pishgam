import styles from "./ZigZagLayout.module.scss";

const ZigZagLayout = (props) => {
  return (
    <div className={styles.container}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default ZigZagLayout;
