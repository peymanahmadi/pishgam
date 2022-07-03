import logo from "../../Images/Logo.png";

const Logo = ({ href }) => {
  return (
    <a href={href} className="logo">
      <img src={logo} alt="things solution" />
      <h3>
        Things <span>Solution</span>
      </h3>
    </a>
  );
};

export default Logo;
