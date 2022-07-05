const Button = ({
  variant,
  color,
  size,
  btnBlock,
  type,
  onClick,
  disabled,
  style,
  children,
  outline,
}) => {
  switch (variant) {
    case "text":
      return (
        <button
          className={`btn text ${color} ${size} ${btnBlock && "btn-block"}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
          style={style}
        >
          {children}
        </button>
      );
    case "contained":
      return (
        <button
          className={`btn contained ${color} ${size} ${
            btnBlock && "btn-block"
          }`}
          type={type}
          onClick={onClick}
          disabled={disabled}
          style={style}
        >
          {children}
        </button>
      );
    case "outlined":
      return (
        <button
          className={`btn outlined ${color}`}
          type={type}
          onClick={onClick}
          disabled={disabled}
          style={style}
        >
          {children}
        </button>
      );
    default:
      break;
  }
  // return (
  //   <button
  //     className={`btn ${primary && "primary"} ${secondary && "secondary"} ${
  //       error && "error"
  //     } ${warning && "warning"} ${info && "info"} ${success && "success"} ${
  //       inverse && "inverse"
  //     } ${small && "small"} ${shadow && "shadow"} ${btnBlock && "btn-block"} ${
  //       outline && "outline outline-primary"
  //     }`}
  //     type={type}
  //     onClick={onClick}
  //     disabled={disabled}
  //     style={style}
  //   >
  //     {children}
  //   </button>
  // );
};

export default Button;
