import Landing from "../components/Landing";
import Products from "../components/Products";
import ZigZagLayout from "../components/ZigZagLayout";
import styles from "./Home.module.scss";

// import Button from "../../shared/components/FormElements/Button";

const Home = () => {
  return (
    <div>
      <Landing />
      <ZigZagLayout title="Products">
        <Products />
      </ZigZagLayout>
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
