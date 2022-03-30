import styles from "./Products.module.scss";
import ProductCard from "../../shared/components/FormElements/ProductCard";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductCard
        title="AUTOMATIC BATCHING SYSTEM"
        // imgAddr={Batching}
        desc="A high precision and flexible automated system useful to weighing and mixing raw materials together to create a final product."
        buttonText="Learn More"
      />
      <ProductCard
        title="WEIGHING SYSTEM"
        // imgAddr={Batching}
        desc="A high precision weighing system usable for all kinds of industrial and non-industrial usages."
        buttonText="Learn More"
      />
      <ProductCard
        title="FEED MILL PLANT AUTOMATION"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="Learn More"
      />
      <ProductCard
        title="IOT KIT"
        // imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="Learn More"
      />
    </div>
  );
};

export default Products;
