import styles from "./Products.module.scss";
import Card from "../../shared/components/FormElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Batching from "../../shared/Images/Home/Batching.png";
import ProductCard from "../../shared/components/FormElements/ProductCard";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductCard
        title="AUTOMATIC BATCHING SYSTEM"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="LEARN MORE"
      />
      <ProductCard
        title="SILO / TANK WEIGHING SYSTEM"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="LEARN MORE"
      />
      <ProductCard
        title="FEED MILL PLANT AUTOMATION"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="LEARN MORE"
      />
      <ProductCard
        title="IOT KIT"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="LEARN MORE"
      />
    </div>
  );
};

export default Products;
