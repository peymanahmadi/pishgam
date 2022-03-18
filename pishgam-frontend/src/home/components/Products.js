import styles from "./Products.module.scss";
import Card from "../../shared/components/FormElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Batching from "../../shared/Images/Home/Batching.png";
import ProductCard from "../../shared/components/FormElements/ProductCard";

const Products = () => {
  return (
    <div className={styles.container}>
      <ProductCard
        title="Automatic Batching System"
        imgAddr={Batching}
        desc="A flexible system to control batching"
        buttonText="LEARN MORE"
      />
      <Card>
        <h3>Tank / Silo Weighing System</h3>
        <Button>LEARN MORE</Button>
      </Card>
    </div>
  );
};

export default Products;
