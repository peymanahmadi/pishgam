import styles from "./WhoWeAre.module.scss";
import We from "../../../shared/Images/Company/young business people.png";

const WhoWeAre = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.whoweare}>
          <h1>Our Mission</h1>
          <p>
            Pishgam empowers cattle and poultry farms become digitalized and
            data-driven, enabling then to make smart decision to improve animal
            health
          </p>
        </div>
        <div className={styles.image}>
          <img src={We} alt="" />
        </div>
      </div>
      <h1>What we do</h1>
      <p>
        A team of three enthusiast hardware and software developers formed a
        startup firm to help industries move forward to a new generation of
        automation.
      </p>
      <h1>Our story</h1>
      <p>
        A team of three enthusiast hardware and software developers formed a
        startup firm to help industries move forward to a new generation of
        automation.
      </p>
      <p>
        The solution we provide are a flexible and reliable automation based on
        AI (Artificial Intelligence) as well as IoT(Internet of Things)
        technologies.
      </p>
    </>
  );
};

export default WhoWeAre;
