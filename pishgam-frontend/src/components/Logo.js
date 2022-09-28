import logo from "../assets/images/Logo.png";

const Logo = ({ href }) => {
  return (
    <a href={href} className="logo">
      <img src={logo} alt="things solution" />
      <h4>
        Things <span>Solution</span>
      </h4>
    </a>
  );
};

export default Logo;
