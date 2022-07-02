import logo from "../../Images/Logo.png";
// import styles from "./Logo.module.scss";

const Logo = ({ href }) => {
  return (
    // <a href={href} className={styles.logo}>
    //   <img src={logo} alt="things solution" />
    //   <h3>
    //     Things <span>Solution</span>
    //   </h3>
    // </a>
    <a href={href} className="logo">
      <img src={logo} alt="things solution" />
      <h3>
        Things <span>Solution</span>
      </h3>
    </a>
  );
};

export default Logo;
