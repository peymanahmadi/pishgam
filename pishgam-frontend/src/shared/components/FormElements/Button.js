import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    <button
      className={`${styles.button} ${props.inverse && styles.inverse} ${
        props.small && styles.small
      } ${props.shaddow && styles.shaddow}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
