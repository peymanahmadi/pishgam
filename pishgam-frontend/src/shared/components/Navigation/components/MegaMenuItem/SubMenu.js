import { NavLink } from "react-router-dom";

import styles from "./SubMenu.module.scss";

const SubMenu = (props) => {
  return (
    <>
      <div className={styles.submenu}>
        <NavLink to={props.to}>
          <span>{props.category}</span>
          {props.title}
        </NavLink>
      </div>
    </>
  );
};

export default SubMenu;
