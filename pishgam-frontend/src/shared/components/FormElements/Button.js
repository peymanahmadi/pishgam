const Button = (props) => {
  return (
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
