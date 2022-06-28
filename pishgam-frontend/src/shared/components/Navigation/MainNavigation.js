import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
import styles from "./MainNavigation.module.scss";
import Logo from "../../Images/Logo.png";
import MenuItem from "./components/MenuItem/MenuItem";
import MegaMenuItem from "./components/MegaMenuItem/MegaMenuItem";
import { ProductsData, ProjectsData, CompanyData } from "./MainNavigationData";
import SideDrawer from "./SideDrawer";
import SideNavigation from "./SideNavigation";
import Backdrop from "../UIElements/Backdrop";
import Button from "../FormElements/Button";

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
          <a href="/" className={styles.logo}>
            <img src={Logo} alt="Pishgam" />
            <h1>Things Solution</h1>
          </a>
        </div>

        <div className={styles.navbtn}>
          <div className={styles.navmenu}>
            <MenuItem to="/" title="Home" />
            {/* <MegaMenuItem title="Products" data={ProductsData} /> */}
            {/* <MegaMenuItem title="Startup Projects" data={ProjectsData} /> */}
            <MegaMenuItem title="Company" data={CompanyData} />
          </div>
          <NavLink to="dashboard/">
            <Button>Things Dashboard</Button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default MainNavigation;
