import Input from "../../../shared/components/FormElements/Input";
import { VALIDATOR_EMAIL } from "../../../shared/util/validators";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <form className={styles["login-form"]}>
        <Input
          element="input"
          type="text"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email."
        />
      </form>
    </div>
  );
};

export default Login;
