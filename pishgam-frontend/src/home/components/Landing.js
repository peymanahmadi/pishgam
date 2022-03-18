import Button from "../../shared/components/FormElements/Button";
import styles from "./Landing.module.scss";
import ProductionLine from "../../shared/Images/Home/ProductionLine.png";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles["landing-image"]}>
        <img src={ProductionLine} alt="" />
      </div>
      <div className={styles["landing-text"]}>
        <h1>
          Empower your <span>business</span> with
        </h1>
        <h1>Pishgam IIoT Solutions!</h1>
        <div>
          <h3>We give you full control and visibility of your operations.</h3>
        </div>
        <Button>LEARN MORE</Button>
      </div>
    </div>
  );
};

export default Landing;
