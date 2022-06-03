import { useState } from "react";
import { useAppContext } from "../../../context/appContext";
import Alert from "../../../shared/components/FormElements/Alert";
import Button from "../../../shared/components/FormElements/Button";
import FormRow from "../../../shared/components/FormElements/FormRow";
import styles from "./Register.module.scss";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <section className={styles["register-page"]}>
      <form onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert danger />}
        {/* name input */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email input */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <Button type="submit" btnBlock shadow style={{ marginTop: "1rem" }}>
          submit
        </Button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button
            type="button"
            onClick={toggleMember}
            className={styles["member-btn"]}
          >
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </section>
  );
};

export default Register;
