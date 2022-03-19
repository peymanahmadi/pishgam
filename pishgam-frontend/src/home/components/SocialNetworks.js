import styles from "./SocialNetworks.module.scss";
import {
  BsLinkedin,
  BsTelegram,
  BsInstagram,
  BsPinterest,
} from "react-icons/bs";

const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <div className={styles["social-icons"]}>
        <BsLinkedin />
        <BsTelegram />
        <BsInstagram />
        <BsPinterest />
      </div>
      <div className={styles.copyright}>
        <p>&copy; 2022 Pishgam</p>
      </div>
    </div>
  );
};

export default SocialNetworks;
