import Landing from "../components/Landing";
import Products from "../components/Products";
import ZigZagLayout from "../components/ZigZagLayout";
import styles from "./Home.module.scss";

// import Button from "../../shared/components/FormElements/Button";

const Home = () => {
  return (
    <div>
      <Landing />
      <ZigZagLayout bg="#f5f5f8" title="Our Products">
        <Products />
      </ZigZagLayout>
      <ZigZagLayout bg="#ffffff" title="Products"></ZigZagLayout>
      <ZigZagLayout
        bg="#f5f5f8"
        title="What our customers are saying?"
      ></ZigZagLayout>
    </div>
  );
};

export default Home;
