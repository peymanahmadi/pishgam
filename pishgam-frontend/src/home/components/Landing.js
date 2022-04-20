import Button from "../../shared/components/FormElements/Button";
import styles from "./Landing.module.scss";
import ProductionLine from "../../shared/Images/Home/ProductionLine.png";

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles["landing-text"]}>
        <div className={styles.banner}>
          <h1>
            Empower your <span>business</span> using{" "}
            <span>Things Solution!</span>
          </h1>
          <div>
            <h3>We give you full control and visibility of your</h3>
            <h3>
              <span>Operations</span>, <span>Plans</span>,{" "}
              <span>Strategies</span>, and <span>Products</span>.
            </h3>
          </div>
          <div className={styles.btn}>
            <Button>Know More</Button>
          </div>
        </div>
      </div>

      <div className={styles["landing-image"]}>
        <img src={ProductionLine} alt="" />
      </div>
    </div>
  );
};

export default Landing;
