import styles from "./FormRow.module.scss";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className={styles["form-row"]}>
      <label htmlFor={name} className={styles["form-label"]}>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        onChange={handleChange}
        className={styles["form-input"]}
      />
    </div>
  );
};

export default FormRow;
