import { useState } from "react";
import Modal from "../UIElements/Modal";
import Button from "./Button";
import styles from "./ProductCard.module.scss";

const ProductCard = (props) => {
  const [showProduct, setShowProduct] = useState(false);
  const openProduct = () => setShowProduct(true);
  const closeProduct = () => setShowProduct(false);
  return (
    <>
      <Modal
        show={showProduct}
        onCancel={closeProduct}
        footer={<Button onClick={closeProduct}>Close</Button>}
      >
        <h1>Hi</h1>
      </Modal>
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
          <Button inverse small onClick={openProduct}>
            {props.buttonText}
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
