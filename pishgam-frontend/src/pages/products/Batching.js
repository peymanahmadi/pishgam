import { FaWeight } from "react-icons/fa";
import { RiUserHeartFill } from "react-icons/ri";
import {
  MdOutlineDashboard,
  MdAnalytics,
  MdSpeed,
  MdRule,
} from "react-icons/md";
import { Zigzag } from "../../components";

const Batching = () => {
  return (
    <>
      <main className="batching">
        <section className="introduce">
          <h3>Automatic Batching System</h3>
          <p>A smart automation solution suitable for animal feed factories.</p>
          <ul>
            <li>accurate weighing</li>
            <li>high speed</li>
            <li>user friendly</li>
            <li>online dashboard</li>
            <li>useful reports</li>
            <li>user access level</li>
          </ul>
        </section>
      </main>

      <section className="features-menu">
        <a href="#">
          <FaWeight />
          accurate weighing
        </a>
        <a href="#">
          <MdSpeed />
          high speed
        </a>
        <a href="#">
          <RiUserHeartFill />
          user friendly
        </a>
        <a href="#">
          <MdOutlineDashboard />
          online dashboard
        </a>
        <a href="#">
          <MdAnalytics />
          useful reports
        </a>
        <a href="#">
          <MdRule />
          user access level
        </a>
      </section>

      <Zigzag
        title="accurate weighing"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="grey"
      />

      <Zigzag
        title="high speed"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="white"
      />

      <Zigzag
        title="user friendly"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="grey"
      />
      <Zigzag
        title="dashboard"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="white"
      />
      <Zigzag
        title="useful reports"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="grey"
      />
      <Zigzag
        title="user access level"
        desc="Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories."
        color="white"
      />

      {/* <section>
        <h4>accurate weighing</h4>
        <p>
          Batching is one of the vital and major production processes such as
          animal feeds, food production, … The major reason is its vital role in
          maintaining the quality as well as the quantity of the products in
          factories.
        </p>
      </section> */}
    </>
  );
};

export default Batching;
