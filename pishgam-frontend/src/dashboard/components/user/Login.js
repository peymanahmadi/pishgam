import Input from "../../../shared/components/FormElements/Input";
import Button from "../../../shared/components/FormElements/Button";
import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.login}>
      <form className={styles["login-form"]}>
        <Input element="input" type="text" label="Email" />
        <Input element="input" type="password" label="Password" />
        <Button>Login</Button>
      </form>
    </div>
  );
};

export default Login;
