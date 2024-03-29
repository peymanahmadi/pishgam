import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu, MdOutlineLanguage } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import styles from "./MainNavigation.module.scss";
// import Logo from "../../Images/Logo.png";
import MenuItem from "./components/MenuItem/MenuItem";
import MegaMenuItem from "./components/MegaMenuItem/MegaMenuItem";
import {
  ProductsData,
  // ProjectsData,
  CompanyData,
  // Languages,
} from "./MainNavigationData";
import SideDrawer from "./SideDrawer";
import SideNavigation from "./SideNavigation";
import Backdrop from "../UIElements/Backdrop";
import Button from "../FormElements/Button";

import { Logo } from "../../../components";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  return (
    <>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen}>
        <SideNavigation onClickOnMenu={closeDrawerHandler} />
      </SideDrawer>

      <nav className={styles.navbar}>
        <div className={styles.menubar}>
          <div className={styles.hamburger}>
            <MdOutlineMenu onClick={openDrawerHandler} />
          </div>
          <Logo href="/" />
        </div>

        <div className={styles.navbtn}>
          <div className={styles.navmenu}>
            <MenuItem to="/" title="Home" />
            <MegaMenuItem title="Products" data={ProductsData} />
            {/* <MegaMenuItem title="Startup Projects" data={ProjectsData} /> */}
            <MegaMenuItem title="Company" data={CompanyData} />
            <div>
              <NavLink to="dashboard/">
                <Button variant="contained" color="primary">
                  Things Dashboard
                </Button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className={styles["dashboard-menu"]}>
          <div
            style={{ display: "flex", margin: "0.25rem 0rem", gap: "0.5rem" }}
          >
            {/* <MegaMenuItem title={<MdOutlineLanguage />} data={Languages} /> */}
            {/* <Button variant="outlined" color="outlined-primary">
              <MdOutlineLanguage />
            </Button>
            <Button variant="outlined" color="outlined-primary">
              <FaUserCircle />
              Login
            </Button> */}
            {/* <MegaMenuItem title={<FaUserCircle />} data={CompanyData} /> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
