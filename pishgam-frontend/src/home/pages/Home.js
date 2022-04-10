import Landing from "../components/Landing";
import Products from "../components/Products";
import SocialNetworks from "../components/SocialNetworks";
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
      <ZigZagLayout bg="#ffffff" title="Our Startup Project">
        <h3>Comming Soon</h3>
      </ZigZagLayout>
      <ZigZagLayout
        bg="#f5f5f8"
        title="What our customers are saying?"
      ></ZigZagLayout>
      <ZigZagLayout bg="#ffffff" title="Blog"></ZigZagLayout>
      <ZigZagLayout bg="#f5f5f8" title="Follow Us On">
        <SocialNetworks />
      </ZigZagLayout>
    </div>
  );
};

export default Home;
