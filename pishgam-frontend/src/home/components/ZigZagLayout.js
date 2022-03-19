import styles from "./ZigZagLayout.module.scss";
// e8eff6; #f7fafd
const ZigZagLayout = (props) => {
  return (
    <div className={styles.container} style={{ background: `${props.bg}` }}>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default ZigZagLayout;
