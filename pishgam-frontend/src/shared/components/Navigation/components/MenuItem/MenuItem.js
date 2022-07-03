import { NavLink } from "react-router-dom";

// import styles from "./MenuItem.module.scss";

const MenuItem = (props) => {
  return (
    // <NavLink to={props.to} className={styles.menu_item}>
    //   {props.title}
    // </NavLink>
    <NavLink to={props.to} className="menu-item">
      {props.title}
    </NavLink>
  );
};

export default MenuItem;
