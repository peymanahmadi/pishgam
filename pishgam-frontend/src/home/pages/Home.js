import styles from "./Home.module.scss";
import ProductionLine from "../../shared/Images/Home/ProductionLine.png";
import Button from "../../shared/components/FormElements/Button";

const Home = () => {
  return (
    <div>
      <div className={styles.landing}>
        <div className={styles["landing-text"]}>
          <h1>Empower your industry</h1>
          <Button>More Info.</Button>
        </div>
        <div className={styles["landing-image"]}>
          <img src={ProductionLine} alt="" />
        </div>
      </div>
      <div className={styles.products}>
        <div className={styles.title}>
          <h1>Products</h1>
        </div>
        <div className={styles.prodcard}></div>
      </div>
      <div className={styles.company}></div>
      <div className={styles.aboutus}>
        <h1>What our customers are saying?</h1>
      </div>
    </div>
  );
};

export default Home;
