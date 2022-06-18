import styles from "./WhoWeAre.module.scss";
import We from "../../../shared/Images/Company/young business people.png";

const WhoWeAre = () => {
  return (
    <div className={styles["whoweare-page"]}>
      <div className={styles["our-mission"]}>
        <div className={styles.whoweare}>
          <h1>Our Mission</h1>
          <p>
            Things Solution is a cloud platform to empower your business by
            digitalize and data-driven your current events, projects,
            activities, ... enabling you to make a smart decision.
          </p>
        </div>

        <div className={styles.image}>
          <img src={We} alt="" />
        </div>
      </div>
      {/* <div className={styles.help}>
        <h1>What we do</h1>
        <p>
          A team of three enthusiast hardware and software developers formed a
          startup firm to help industries move forward to a new generation of
          automation.
        </p>
      </div> */}
    </div>
  );
};

export default WhoWeAre;
