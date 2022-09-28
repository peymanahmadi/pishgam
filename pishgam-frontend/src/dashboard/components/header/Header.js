import Blob from "../../../shared/components/FormElements/Blob";
import styles from "./Header.module.scss";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h4>{props.title}</h4>
        <div className={styles.blob}>
          <Blob />
        </div>
      </div>
      <div className={styles.value}>
        <h2>{props.value}</h2>
        <span>kg</span>
      </div>
    </div>
  );
};

export default Header;
