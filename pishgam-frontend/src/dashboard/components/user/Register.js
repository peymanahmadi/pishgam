import { useState } from "react";
import Button from "../../../shared/components/FormElements/Button";
import FormRow from "../../../shared/components/FormElements/FormRow";
import styles from "./Register.module.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  return (
    <section className={styles["register-page"]}>
      <form className={styles.form}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {/* name input */}
        <FormRow type="text" name="name" value={values.name} />
        {/* email input */}
        <FormRow type="email" name="email" value={values.email} />
        {/* password input */}
        <FormRow type="password" name="password" value={values.password} />
        <Button>{values.isMember ? "Register" : "Login"}</Button>
        <p>{values.isMember ? "Not a member yet?" : "Already a member?"}</p>
      </form>
    </section>
  );
};

export default Register;
