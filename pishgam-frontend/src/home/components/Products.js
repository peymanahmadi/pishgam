import styles from "./Products.module.scss";
import ProductCard from "../../shared/components/FormElements/ProductCard";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductCard
        title="Automatic Batching System"
        // imgAddr={Batching}
        desc="A high precision and flexible automated system useful to weighing and mixing raw materials together to create a final product."
        buttonText="Learn More"
      />
      <ProductCard
        title="Weighing Module"
        // imgAddr={Batching}
        desc="A fast, accurate, and memorable weighing solution useful for all purposes."
        buttonText="Learn More"
      />
      <ProductCard
        title="Feed Mill Plant Automation"
        // imgAddr={Batching}
        desc="A reliable, flexible, and very user friendly automation system for feed plants."
        buttonText="Learn More"
      />
      <ProductCard
        title="IoT Module"
        // imgAddr={Batching}
        desc="A wireless module connecting to our devices to send data to web server periodically."
        buttonText="Learn More"
      />
    </div>
  );
};

export default Products;
