import Button from "./Button";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  return (
    <div className={styles["product-card"]}>
      <div>
        <h3>{props.title}</h3>
      </div>
      {/* <div style={{ background: "azure" }}>
        <img src={props.imgAddr} alt={props.title} />
      </div> */}
      <div style={{ textAlign: "center" }}>
        <p>{props.desc}</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <Button>{props.buttonText}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
