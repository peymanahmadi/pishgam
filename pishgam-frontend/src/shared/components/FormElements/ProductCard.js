import Button from "./Button";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={styles["product-card"]}>
      <h2>{props.title}</h2>
      <img src={props.imgAddr} alt={props.title} />
      <p>{props.desc}</p>
      <Button>{props.buttonText}</Button>
    </div>
  );
};

export default ProductCard;
