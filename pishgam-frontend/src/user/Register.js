import { useState, useEffect } from "react";
import { useAppContext } from "../context/appContext";
import Alert from "../shared/components/FormElements/Alert";
import Button from "../shared/components/FormElements/Button";
import FormRow from "../shared/components/FormElements/FormRow";
import styles from "./Register.module.scss";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { user, isLoading, showAlert, displayAlert, registerUser } =
    useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    const currentUser = { name, email, password };
    if (isMember) {
      console.log("already a member");
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/dashboard");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <section className={styles["register-page"]}>
      <form onSubmit={onSubmit}>
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
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
        <Button
          type="submit"
          btnBlock
          shadow
          style={{ marginTop: "1rem" }}
          disabled={isLoading}
        >
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
