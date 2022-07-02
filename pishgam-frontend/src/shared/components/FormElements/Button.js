// import styles from "./Button.module.scss";

const Button = (props) => {
  return (
    // <button
    //   className={`${styles.btn} ${props.inverse && styles.inverse} ${
    //     props.small && styles.small
    //   } ${props.shadow && styles.shadow} ${
    //     props.btnBlock && styles["btn-block"]
    //   }`}
    //   type={props.type}
    //   onClick={props.onClick}
    //   disabled={props.disabled}
    //   style={props.style}
    // >
    //   {props.children}
    // </button>
    <button
      className={`btn ${props.inverse && `inverse`} ${props.small && `small`} ${
        props.shadow && `shadow`
      } ${props.btnBlock && `btn-block`}`}
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
