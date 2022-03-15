import styles from "./SideNavigation.module.scss";
import {
  ProductsData,
  ProjectsData,
  CompanyData,
} from "./MainNavigationData.js";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Button from "../UIElements/Button";
// import MenuItem from "../MenuItem/MenuItem";
// import MegaMenuItem from "../MegaMenuItem/MegaMenuItem";

const SideNavigation = (props) => {
  const [productsMenu, setproductsMenu] = useState(false);
  const [projectsMenu, setprojectsMenu] = useState(false);
  const [companyMenu, setCompanyMenu] = useState(false);
  const productsMenuHandler = () => {
    setproductsMenu(!productsMenu);
  };
  const projectsMenuHandler = () => {
    setprojectsMenu(!projectsMenu);
  };
  const companyMenuHandler = () => {
    setCompanyMenu(!companyMenu);
  };
  return (
    <>
      <div className={styles["side-navigation"]}>
        <div className={styles.menu}>
          <div onClick={props.onClickOnMenu}>
            <NavLink to="/">Home</NavLink>
          </div>

          <div className={styles.submenu} onClick={productsMenuHandler}>
            <div>Products</div>
            {productsMenu && (
              <div
                className={styles["submenu-item"]}
                onClick={props.onClickOnMenu}
              >
                <NavLink to="/products/batchingsystem">
                  Automatic Batching System
                </NavLink>
                <NavLink to="/products/weighingsystem">Weighing System</NavLink>
              </div>
            )}
          </div>

          <div className={styles.submenu} onClick={projectsMenuHandler}>
            <div>Projects</div>
            {projectsMenu && (
              <div
                className={styles["submenu-item"]}
                onClick={props.onClickOnMenu}
              >
                <NavLink to="/projects/cowdetection">Cow detection</NavLink>
              </div>
            )}
          </div>

          <div className={styles.submenu} onClick={companyMenuHandler}>
            <div>Company</div>
            {companyMenu && (
              <div
                className={styles["submenu-item"]}
                onClick={props.onClickOnMenu}
              >
                <NavLink to="/company/whoweare">Who We Are</NavLink>
              </div>
            )}
          </div>
        </div>
        <div className={styles["things-button"]} onClick={props.onClickOnMenu}>
          <Button>Things Dashboard</Button>
        </div>
      </div>
    </>
  );
};

export default SideNavigation;
